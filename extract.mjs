import fs from 'fs';
import path from 'path';

const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

let md = '# MD Astra - Complete Website Content & Copywriting Data\n\n';

for (const file of files) {
    const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
    
    let fileHasContent = false;
    let fileMd = `## ${file.replace('.jsx', '')}\n\n`;
    
    // Extract data arrays
    const arrayMatch = content.match(/const\s+\w+\s*=\s*\[([\s\S]*?)\];/g);
    if (arrayMatch) {
         fileMd += `### Data Definitions\n\`\`\`javascript\n${arrayMatch.join('\n\n')}\n\`\`\`\n\n`;
         fileHasContent = true;
    }

    // Extract raw text between JSX elements
    let jsxText = [];
    const textRegex = />([^<]{2,}?)</g;
    let match;
    while ((match = textRegex.exec(content)) !== null) {
        let text = match[1].trim();
        // Ignore single characters, empty strings, and pure symbols
        if (text && text.length > 2 && /[a-zA-Z]/.test(text)) {
            // Remove generic import/export patterns if they accidentally match
            if (!text.includes('import ') && !text.includes('export ')) {
                jsxText.push(text);
            }
        }
    }
    
    // Remove duplicates to clean it up slightly
    jsxText = [...new Set(jsxText)];

    if (jsxText.length > 0) {
        fileMd += `### Static Text\n\n`;
        jsxText.forEach(t => {
            fileMd += `- ${t.replace(/\s+/g, ' ')}\n`;
        });
        fileMd += '\n';
        fileHasContent = true;
    }
    
    if (fileHasContent) {
        md += fileMd + '\n---\n\n';
    }
}

// Write to the artifact directory
fs.writeFileSync('/Users/atharvalepse/.gemini/antigravity/brain/13d3b247-7768-4d0d-ae60-53471c59545e/website_content.md', md);
console.log('Extraction complete.');
