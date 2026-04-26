import os
import re

base_dir = "/Users/atharvalepse/Downloads/stitch_healthcare_marketing"
directories = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]

header_html = """<!-- Navigation Header -->
<header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-50 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 h-20">
        <a href="../homepage_luminous/code.html" class="text-2xl font-bold text-purple-600 font-['Newsreader'] italic">MD Astra</a>
        <nav class="hidden md:flex gap-8 items-center">
            <a class="text-slate-600 hover:text-purple-600 font-medium transition-colors duration-200" href="../homepage_luminous/code.html">Home</a>
            <a class="text-slate-600 hover:text-purple-600 font-medium transition-colors duration-200" href="#">About Us</a>
            
            <!-- Services Dropdown -->
            <div class="relative group">
                <button class="flex items-center gap-1 text-slate-600 hover:text-purple-600 font-medium transition-colors duration-200 py-2">
                    Services <span class="material-symbols-outlined text-[20px]">expand_more</span>
                </button>
                <div class="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-purple-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div class="py-2">
                        <a href="../seo_services/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">SEO Service</a>
                        <a href="../website_development/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Website Development</a>
                        <a href="../social_media_marketing/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Social Media Marketing</a>
                        <a href="../gmb_management/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">GMB Management</a>
                        <a href="../content_marketing/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Content Marketing</a>
                        <a href="../amazon_ghl_marketing/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Amazon & GHL Marketing</a>
                    </div>
                </div>
            </div>

            <!-- Industries Dropdown -->
            <div class="relative group">
                <button class="flex items-center gap-1 text-slate-600 hover:text-purple-600 font-medium transition-colors duration-200 py-2">
                    Industries <span class="material-symbols-outlined text-[20px]">expand_more</span>
                </button>
                <div class="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-purple-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div class="py-2">
                        <a href="../real_estate_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Real Estate</a>
                        <a href="../healthcare_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Healthcare</a>
                        <a href="../restaurant_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Restaurants</a>
                        <a href="../ecommerce_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Ecommerce</a>
                        <a href="../legal_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Legal Services</a>
                        <a href="../education_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Education & Coaching</a>
                        <a href="../local_services_marketing_bright/code.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700">Local Services</a>
                    </div>
                </div>
            </div>
        </nav>
        <a href="../book_an_appointment/code.html" class="bg-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-purple-700 transition-colors shadow-sm">Get Started</a>
    </div>
</header>"""

# Regex to find the first <header> or <nav> after <body>
pattern = re.compile(r'(<body[^>]*>)\s*(?:<!--.*?-->\s*)*(?:<header[^>]*>.*?</header>|<nav[^>]*>.*?</nav>)', re.DOTALL | re.IGNORECASE)

for d in directories:
    file_path = os.path.join(base_dir, d, "code.html")
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the file has the material-symbols-outlined font imported, if not add it
        if 'Material+Symbols+Outlined' not in content:
            content = content.replace('</head>', '    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">\n</head>')

        # Replace the header
        new_content, count = pattern.subn(r'\1\n' + header_html.replace('\\', '\\\\'), content, count=1)
        
        if count == 0:
            print(f"Warning: Could not find header/nav to replace in {d}")
        else:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated header in {d}")
