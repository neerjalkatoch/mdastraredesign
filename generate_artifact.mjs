import fs from 'fs';

const inputJSONPath = '/Users/atharvalepse/Downloads/mdastra-redesign-main/extracted_content.json';
const outputMDPath = '/Users/atharvalepse/.gemini/antigravity/brain/e12c81fd-278a-4f96-8b1b-89bbcc5b541a/website_content_inventory.md';
// Note: e12c81fd-278a-4f96-8b1b-89bbcc5b541a is the current Conversation ID

const data = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));

let md = '# Website Content Inventory\n\n';

// 1. Sitemap
md += '## Sitemap\n\n';
data.forEach(page => {
    md += `- [${page.pageName}](${page.route})\n`;
});
md += '\n';

// 2. Structured content inventory page by page
md += '## Content Inventory\n\n';
data.forEach(page => {
    md += `### Page: ${page.pageName}\n`;
    md += `**Route**: ${page.route}\n`;
    if (page.seo.title) md += `**SEO Title**: ${page.seo.title}\n`;
    if (page.seo.description) md += `**SEO Description**: ${page.seo.description}\n`;
    md += `\n**Sections**:\n`;
    
    page.sections.forEach(section => {
        md += `- **${section.name}**\n`;
        md += `  - **Status**: ${section.status}\n`;
        
        section.content.forEach(item => {
            if (item.type === 'cta') {
                md += `  - **CTA** (${item.href}): ${item.text}\n`;
            } else if (item.type === 'list') {
                md += `  - **List Items**:\n`;
                item.items.forEach(li => {
                    md += `    - ${li}\n`;
                });
            } else {
                md += `  - **${item.type.charAt(0).toUpperCase() + item.type.slice(1)}**: ${item.text}\n`;
            }
        });
        
        if (section.media && section.media.length > 0) {
            md += `  - **Media References**:\n`;
            section.media.forEach(m => {
                md += `    - Image: \`${m.src}\` (Alt: ${m.alt || 'None'})\n`;
            });
        }
    });
    md += '\n---\n\n';
});

// 3. Status lists
const reusable = [];
const rewrite = [];
const remove = [];

data.forEach(page => {
    page.sections.forEach(section => {
        const entry = `${page.pageName} -> ${section.name}`;
        if (section.status === 'reusable as-is') reusable.push(entry);
        else if (section.status === 'reusable with rewrite') rewrite.push(entry);
        else if (section.status === 'remove') remove.push(entry);
    });
});

md += '## Summary by Quality\n\n';

md += '### 1. Reusable Content\n';
reusable.forEach(i => md += `- ${i}\n`);
md += '\n';

md += '### 2. Rewrite-Needed Content\n';
rewrite.forEach(i => md += `- ${i}\n`);
md += '\n';

md += '### 3. Remove Content\n';
remove.forEach(i => md += `- ${i}\n`);
md += '\n';

// 4. JSON Content Dump
md += '## Final JSON Content Dump\n\n';
md += '```json\n';
md += JSON.stringify(data, null, 2);
md += '\n```\n';

fs.writeFileSync(outputMDPath, md);
console.log('Artifact generated.');
