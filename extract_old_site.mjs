import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const oldSiteDir = '/Users/atharvalepse/Downloads/stitch_healthcare_marketing';
const outputJSONPath = '/Users/atharvalepse/Downloads/mdastra-redesign-main/extracted_content.json';

const directories = fs.readdirSync(oldSiteDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let pagesContent = [];

directories.forEach(dirName => {
    const htmlPath = path.join(oldSiteDir, dirName, 'code.html');
    if (!fs.existsSync(htmlPath)) return;

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const $ = cheerio.load(htmlContent);

    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';

    let sections = [];
    
    const sectionElements = $('section, header, footer');
    if (sectionElements.length === 0) {
        $('body > div').each((i, el) => {
            extractSection($, el, i, dirName, sections);
        });
    } else {
        sectionElements.each((i, el) => {
            extractSection($, el, i, dirName, sections);
        });
    }

    pagesContent.push({
        pageName: dirName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        route: dirName === 'homepage_luminous' ? '/' : `/${dirName}`,
        seo: {
            title,
            description: metaDescription
        },
        sections
    });
});

function extractSection($, el, index, dirName, sections) {
    let rawName = el.tagName.toLowerCase();
    let id = $(el).attr('id');
    let className = $(el).attr('class');
    
    let sectionName = rawName === 'header' ? 'Header' : 
                      rawName === 'footer' ? 'Footer' : 
                      id ? id : 
                      className ? `Section (${className.split(' ')[0]})` : 
                      `Section ${index + 1}`;
    
    const $el = $(el);
    const textElements = [];
    const mediaReferences = [];
    
    $el.find('h1, h2, h3, h4, h5, h6').each((_, h) => {
        const text = $(h).text().replace(/\s+/g, ' ').trim();
        if (text) textElements.push({ type: h.tagName.toLowerCase(), text });
    });
    
    $el.find('p').each((_, p) => {
        const text = $(p).text().replace(/\s+/g, ' ').trim();
        if (text) textElements.push({ type: 'paragraph', text });
    });

    $el.find('a, button').each((_, btn) => {
        const text = $(btn).text().replace(/\s+/g, ' ').trim();
        const href = $(btn).attr('href');
        if (text) textElements.push({ type: 'cta', text, href });
    });

    $el.find('img').each((_, img) => {
        const src = $(img).attr('src');
        const alt = $(img).attr('alt');
        if (src) mediaReferences.push({ type: 'image', src, alt });
    });
    
    $el.find('ul, ol').each((_, list) => {
        const items = [];
        $(list).find('li').each((_, li) => {
            const liText = $(li).text().replace(/\s+/g, ' ').trim();
            if (liText) items.push(liText);
        });
        if (items.length > 0) textElements.push({ type: 'list', items });
    });

    const uniqueTexts = [];
    const seen = new Set();
    textElements.forEach(item => {
        const key = item.text || JSON.stringify(item.items);
        if (!seen.has(key)) {
            seen.add(key);
            uniqueTexts.push(item);
        }
    });

    let status = 'reusable with rewrite';
    const allTextStr = JSON.stringify(uniqueTexts).toLowerCase();
    if (allTextStr.includes('lorem ipsum')) {
        status = 'remove';
    } else if (rawName === 'header' || rawName === 'footer') {
        status = 'reusable as-is';
    } else if (uniqueTexts.length === 0) {
        status = 'remove';
    }

    if (uniqueTexts.length > 0 || mediaReferences.length > 0) {
        sections.push({
            name: sectionName,
            content: uniqueTexts,
            media: mediaReferences,
            status: status
        });
    }
}

fs.writeFileSync(outputJSONPath, JSON.stringify(pagesContent, null, 2));
console.log('Extraction done! Total pages:', pagesContent.length);
