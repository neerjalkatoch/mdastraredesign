---
name: Luminous Editorial
colors:
  surface: '#fdf7ff'
  surface-dim: '#dfd6ed'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1ff'
  surface-container: '#f3eaff'
  surface-container-high: '#ede4fb'
  surface-container-highest: '#e7dff6'
  on-surface: '#1d1929'
  on-surface-variant: '#4a4454'
  inverse-surface: '#322e3f'
  inverse-on-surface: '#f5eeff'
  outline: '#7b7485'
  outline-variant: '#cbc3d6'
  surface-tint: '#6d40cc'
  primary: '#6b3dca'
  on-primary: '#ffffff'
  primary-container: '#8458e4'
  on-primary-container: '#fffbff'
  inverse-primary: '#d1bcff'
  secondary: '#5f5d6a'
  on-secondary: '#ffffff'
  secondary-container: '#e4e0f0'
  on-secondary-container: '#656370'
  tertiary: '#7b5500'
  on-tertiary: '#ffffff'
  tertiary-container: '#9a6c00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d1bcff'
  on-primary-fixed: '#23005b'
  on-primary-fixed-variant: '#5520b3'
  secondary-fixed: '#e4e0f0'
  secondary-fixed-dim: '#c8c4d4'
  on-secondary-fixed: '#1b1a25'
  on-secondary-fixed-variant: '#474552'
  tertiary-fixed: '#ffdeab'
  tertiary-fixed-dim: '#fbbb45'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#fdf7ff'
  on-background: '#1d1929'
  surface-variant: '#e7dff6'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-page: 64px
  section-gap: 128px
---

## Brand & Style

The design system is defined by an editorial elegance that prioritizes clarity, intellectual rigor, and a "breathable" user experience. It targets high-end publications, health tech, and professional services where information density must be balanced with visual rest. 

The style is a sophisticated blend of **Minimalism** and **Modern Editorial**. By utilizing a strictly light-mode palette, the UI maintains a "printed-paper" quality that feels permanent and trustworthy. Every element is designed to feel light and airy, avoiding any heavy blocks of color or dark sections that could disrupt the visual flow. The emotional response is one of calm authority—professional without being cold, and modern without being trendy.

## Colors

This design system utilizes a high-contrast but soft-spectrum palette. The primary accent is a vibrant light purple (#9D72FF), used purposefully for calls to action and critical highlights. To maintain the airy aesthetic, this is paired with a secondary pale lavender tint for soft backgrounds and subtle grouping.

Crucially, absolute black (#000000) is forbidden. Instead, a deep charcoal-purple is used for text to ensure high legibility while maintaining a harmonious relationship with the accent color. Surfaces are predominantly pure white, using the secondary tint to create "depth" through color rather than shadow.

## Typography

The typographic soul of the design system is **Newsreader**, a serif that evokes a sense of traditional journalism and literary prestige. Headlines use medium weights with tighter tracking to feel cohesive, while body text leverages generous line heights to enhance the "airy" feel and improve long-form readability.

For functional elements like labels, buttons, and navigation, **Inter** provides a utilitarian counterpoint. This sans-serif addition ensures that interactive elements remain distinct from content, providing a clear visual hierarchy between "what to read" and "what to do."

## Layout & Spacing

The layout utilizes a **Fixed Grid** model to ensure the content feels curated and centered. A 12-column grid provides the framework, but the design system emphasizes oversized margins and significant vertical "white space" to prevent the UI from feeling cluttered.

Spacing follows an 8px linear scale. Section headers are separated by large gaps (128px+) to allow the eye to reset between topics. Component-level spacing is generous; padding inside cards and containers should always feel slightly "too large" by traditional standards to maintain the airy narrative.

## Elevation & Depth

To adhere to the "no dark sections" and "airy" requirements, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

1.  **Base Layer:** Pure #FFFFFF.
2.  **Surface Layer:** Secondary tint (#F3EFFF) used for subtle separation of sections.
3.  **Outlines:** Elements like cards use a very thin (1px) border in a lightened version of the primary color or a soft grey-purple.
4.  **Shadows:** When necessary for interactivity, use "Ambient Shadows"—extremely diffused, low-opacity (5-8%) glows tinted with the primary purple, making the element appear as if it is floating on a bed of light.

## Shapes

The design system employs a **Soft** shape language. While the typography is classic, the shapes remain modern and approachable. 

Small radii (4px to 8px) are applied to buttons, input fields, and images. This subtle rounding softens the high-contrast layout without making it appear juvenile or "bubbly." The goal is a professional "architectural" curve that feels intentional and precise.

## Components

*   **Buttons:** Primary buttons are solid #9D72FF with white text. Secondary buttons use a transparent background with a 1px #9D72FF border. Both use Inter Medium for the label.
*   **Chips/Tags:** Small, pill-shaped elements using the #F3EFFF background with deep purple text. No borders.
*   **Input Fields:** Clean white backgrounds with a subtle bottom-border (2px) in #F3EFFF that transitions to #9D72FF on focus. 
*   **Cards:** Pure white backgrounds with a soft 1px border. No heavy drop shadows. Use generous internal padding (min 32px).
*   **Lists:** Separated by thin, hair-line dividers in #F3EFFF. Bullet points are replaced with small, elegant purple icons or Newsreader-styled numerals.
*   **Checkboxes/Radios:** Custom-styled in #9D72FF when active, using white checkmarks to maintain the high-contrast, airy feel.
*   **Additional Component (The "Editorial Pull-Quote"):** A specific component for highlighting key text, using large Newsreader Italic and a left-hand purple accent bar.