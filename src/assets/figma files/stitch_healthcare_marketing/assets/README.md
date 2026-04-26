# Assets Folder Guide

Use this folder for all reusable brand and media files.

## Structure
- `logo.svg`: Default shared site logo used on all pages.
- `images/uploads/`: Put your custom images here.
- `icons/`: Place icon SVG/PNG files here.
- `css/site.css`: Shared visual enhancements and animations.
- `js/site.js`: Shared interaction and scroll reveal logic.

## Recommended Image Naming
Use lowercase and hyphens, for example:
- `doctor-team.jpg`
- `clinic-interior.webp`
- `campaign-dashboard.png`

## Referencing Uploaded Images
From any page folder (like `homepage_luminous/code.html`), use:
- `../assets/images/uploads/your-image-name.jpg`

This keeps paths consistent across all site pages.
