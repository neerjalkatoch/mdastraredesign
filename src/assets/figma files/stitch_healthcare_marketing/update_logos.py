import os
import re

base_dir = "/Users/atharvalepse/Downloads/stitch_healthcare_marketing"
directories = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]

header_logo_html = '<img src="../assets/logo.png" alt="MD Astra Logo" class="h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-normal">'
footer_logo_html = '<img src="../assets/logo.png" alt="MD Astra Logo" class="h-24 w-auto object-contain mb-4 mix-blend-multiply dark:mix-blend-normal">'

# Regex to find the header text link
header_pattern = re.compile(r'<a href="\.\./homepage_luminous/code\.html" class="text-2xl font-bold text-purple-600 font-\[\'Newsreader\'\] italic">MD Astra</a>')

# Regex to find the footer title
footer_pattern_astra = re.compile(r'<div class="[^"]*">MD Astra</div>')
footer_pattern_growth = re.compile(r'<div class="[^"]*">GrowthCore</div>')

os.makedirs(os.path.join(base_dir, "assets"), exist_ok=True)

for d in directories:
    file_path = os.path.join(base_dir, d, "code.html")
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace header logo
        new_content = header_pattern.sub(f'<a href="../homepage_luminous/code.html" class="flex items-center">\n            {header_logo_html}\n        </a>', content)
        
        # Replace footer logo
        new_content = footer_pattern_astra.sub(footer_logo_html, new_content)
        new_content = footer_pattern_growth.sub(footer_logo_html, new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated logos in {d}")

