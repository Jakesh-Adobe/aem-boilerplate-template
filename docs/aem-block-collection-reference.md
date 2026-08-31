# AEM Block Collection Reference

Captured from https://www.aem.live/developer/block-collection and related block pages on 2026-08-31.

This file is a local working reference for future assignments in this AEM Edge Delivery Services project. It summarizes the official pages, keeps source/document links, and records image references exposed by the fetched pages.

## General Principles

The AEM Block Collection contains content block blueprints that are considered part of the AEM product and are recommended starting points for project blocks.

Blocks are content-oriented components. They add structure, presentation, and behavior to content that authors write in documents. A self-contained application-like feature, such as a calculator, search app, or form-driven workflow, is usually a widget rather than a normal content block.

The collection is based on production AEM projects. Blocks are included when they are broadly useful, sufficiently general, and reusable without changing the underlying content model too much.

Expected block principles:

- Intuitive: easy and clear authoring structure.
- Usable: no unnecessary dependencies and compatible with boilerplate.
- Responsive: works across breakpoints.
- Context aware: inherits surrounding text/background context where appropriate.
- Localizable: no hard-coded author-facing content.
- Fast: no negative performance impact.
- SEO and accessibility friendly.

Blocks are meant as a basis for custom project development. The `.css` and `.js` are commonly adapted to match each site's design and requirements. The primary reusable value is often the authoring/content structure.

Important repositories:

- Boilerplate blocks: https://github.com/adobe/aem-boilerplate/tree/main/blocks
- Block collection blocks: https://github.com/adobe/aem-block-collection/tree/main/blocks
- Sidekick Library docs: https://www.aem.live/docs/sidekick-library

## Boilerplate And Default Content

The AEM Boilerplate includes the most common blocks and default content patterns used by most AEM projects. Authors can discover/copy block structures through the Sidekick Library.

Boilerplate/default entries listed by the collection page:

- Headings
- Text
- Images
- Lists
- Links
- Buttons
- Code
- Sections
- Icons
- Hero
- Columns
- Cards
- Header
- Footer
- Metadata
- Section Metadata

## Block Collection Entries

Common collection entries listed by the overview page:

- Embed
- Fragment
- Table
- Video
- Accordion
- Breadcrumbs
- Carousel
- Modal
- Quote
- Search
- Tabs
- Form, marked deprecated

The collection continues to evolve. Current candidate mentioned by the page: Consent Banner.

## Headings

Source page: https://www.aem.live/developer/block-collection/headings

Purpose: semantic headings provide the structural backbone of a document.

Authoring notes:

- Use the built-in document heading styles from Heading 1 through Heading 6.
- These map to HTML `h1` through `h6`.
- Keep heading hierarchy in sequence. Avoid skipping levels for visual styling reasons.
- Use only one `Heading 1` per page when possible.
- The first `Heading 1` is used as the default page title if metadata does not override it.

Code notes:

- Headings are default content.
- They are styled in project/block CSS.
- Usually no JavaScript is needed.

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/headings
- Content document: https://docs.google.com/document/d/1l1fV7uOCL8w9Y8gi_0w7Zyq0UYJbe2N7cJt6OeBNKJY/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_1059f889928c7ba500b00070d3d8ff183a5114580.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_103696181c6e9da27dfa001bde5732fb544233fcc.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1b8585bcc7e77557c23b53ac1cf1ccd6fa1d33fa9.png?width=750&format=png&optimize=medium

## Text

Source page: https://www.aem.live/developer/block-collection/text

Purpose: normal paragraphs/body copy with semantic formatting.

Authoring notes:

- Use normal text paragraphs in Word or Google Docs.
- Supports bold, italic, underline, strikethrough, subscript, and superscript.
- These map to semantic HTML tags such as `strong`, `em`, `u`, `s`, `sup`, and `sub`.
- Paragraphs and line feeds are both supported.
- The first portion of the first paragraph can serve as the default page description if metadata does not override it.

Code notes:

- Text is default content.
- Styling lives in project/block CSS.
- Usually no JavaScript is needed.
- Boilerplate reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L45-L51

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/text
- Content document: https://docs.google.com/document/d/1PWTeoC8euG4GvQcmtT5hUpDNn6vrpj7IipD27xUcgwg/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_1059f889928c7ba500b00070d3d8ff183a5114580.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_133c5ab52c81428ff00a532ccc014f8fb88a54efd.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1b0f926e1edbb2970ad355fb8ea460695f8c993ba.png?width=750&format=png&optimize=medium

## Images

Source page: https://www.aem.live/developer/block-collection/images

Purpose: image/default content support for photos, illustrations, and visual content.

Authoring notes:

- Insert or paste images directly into Word or Google Docs.
- Add alt text for accessibility.
- AEM automatically resizes images and converts them to suitable browser formats.
- Recommended source image width is at least 2000px when available.
- The first image on a page becomes the default social/meta image unless metadata overrides it.
- Google Docs downsizes images to a maximum of 1600px width or height, which is usually enough but can affect detailed illustrations.

Code notes:

- Images are default content.
- Usually styled in project/block CSS.
- Usually no JavaScript is needed.
- Boilerplate reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L201-L205

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/images
- Content document: https://docs.google.com/document/d/1cdw9ih7gdq51-nkZLVuoVrWihWgwa_8mCR_qMkZGRMA/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1b65d19fa9b66263c870db66d6cfcba62d48518e0.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1bf9131735a116314357207584a1deb138899750f.png?width=750&format=png&optimize=medium

## Lists

Source page: https://www.aem.live/developer/block-collection/lists

Purpose: ordered and unordered lists in default content.

Authoring notes:

- Supports nested numbered lists and bullet lists.
- Numbered lists become `ol`; bullet lists become `ul`.
- Keep list items relatively simple. Complex list items can be difficult to maintain in word processors.

Code notes:

- Lists are default content.
- Usually styled in project/block CSS.
- Usually no JavaScript is needed.
- Boilerplate reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L201-L205

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/lists
- Content document: https://docs.google.com/document/d/1Jt7hG6P7sjpAsjRO5ExuXZQHAbeZmIeSVG1JzFvARpg/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_197158bd714eb452d8f986eb96c01f097e623add4.png?width=750&format=png&optimize=medium

## Links

Source page: https://www.aem.live/developer/block-collection/links

Purpose: hyperlinks across default content and blocks.

Authoring notes:

- Create links with the Word or Google Docs insert-link option.
- Word and Google Docs accept absolute links; AEM converts internal site links to relative links while leaving external links absolute.
- Links can be used as regular text links, media references, fragment references, or block inputs.
- Word Online does not allow links directly on images. A workaround is to place a link below an image and wrap the image client-side.

Code notes:

- Links are default content.
- Usually styled in project/block CSS.
- The docs include optional examples for wrapping images with adjacent links and opening external/PDF links in new tabs.

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/links
- Content document: https://docs.google.com/document/d/1rrcFqYpLvlbCF8faJ757yLy-CrB5WXAi2aQLYSbHufs/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_18ca495f033032eb8f9dbdaf4df2009067fe24519.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1522da0cc7c6615dbf7598fbd28304579ee014be4.png?width=750&format=png&optimize=medium

## Buttons

Source page: https://www.aem.live/developer/block-collection/buttons

Purpose: call-to-action buttons based on authored links.

Authoring notes:

- In boilerplate, buttons are created from a link in a paragraph by itself.
- Bold and italic formatting determine button variations.
- Bold usually maps to primary button style.
- Italic usually maps to secondary button style.
- Bold plus italic can map to a high-impact/accent variation, depending on project CSS.

Code notes:

- Button decoration JavaScript is included in boilerplate and usually remains mostly unchanged.
- CSS styling is project-specific and may also be adjusted per block.
- Decoration code reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/scripts/scripts.js#L477-L501
- Styling code reference: https://github.com/adobe/helix-project-boilerplate/blob/main/styles/styles.css#L108-L144

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/buttons
- Content document: https://docs.google.com/document/d/1_T0jR5-IctZnAZco34eNa2H98vCFpicth6xD44d_kKA/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_16cf2b4243dbb490a6f8e08130e209f46e4b25e20.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_18eefc222ff426751b20370302a2ac2e43eec196d.png?width=750&format=png&optimize=medium

## Code

Source page: https://www.aem.live/developer/block-collection/code

Purpose: inline and multiline code formatting for technical content.

Authoring notes:

- Use a fixed-width font such as Courier New in Word or Google Docs.
- Inline fixed-width text becomes `code`.
- Multiline fixed-width text becomes `pre` containing `code`.

Code notes:

- Code is default content.
- Styling lives in project CSS.
- Boilerplate styling reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L95-L106

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/code
- Content document: https://docs.google.com/document/d/1plJSDokrSQV90mrCCKYnDTVJAiW2djcHFJUPKTgf6zY/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1be599a9df1885b40728203ea120672043f501475.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1818ca38b80ce791a189727550a66a99c7082a530.png?width=750&format=png&optimize=medium

## Sections

Source page: https://www.aem.live/developer/block-collection/sections

Purpose: top-level grouping containers for content and blocks.

Authoring notes:

- Sections are separated by horizontal rules or `---`.
- Sections group content for semantic or design reasons.
- A common use is applying a different background color to one page area.
- Technically, a section becomes a wrapper `div` around its contained default content and blocks.

Code notes:

- Generic sections normally only need project-specific layout styling such as margins, padding, and max-width.
- Section metadata can augment sections with styling, background colors, images, IDs, or attributes.
- Section styling reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/styles/styles.css#L165-L167

Reference links:

- Document structure: https://www.hlx.live/developer/markup-sections-blocks
- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/sections
- Content document: https://docs.google.com/document/d/15ZW6PTraZ41Oxb27kIcEig9JIm0oETXGX9_ojQmSW-Y/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_14dc9f0f8c297685957f3624b6176e72106c37694.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1410e077d5039bb4d93cab2ec550f6cd8f741c03d.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1a81ee56d02687ae76135bac219881060e5a7b114.png?width=750&format=png&optimize=medium

## Icons

Source page: https://www.aem.live/developer/block-collection/icons

Purpose: authorable icon references inside default content.

Authoring notes:

- Authors use `:<iconname>:` notation.
- The boilerplate converts icon spans into SVG images.
- Icons referenced by block code often live in the code repository.
- Author-managed icons can live under an `/icons/` folder in the content source, such as SharePoint or Google Drive.
- The same `:<iconname>:` notation can reference content-managed icons.

Code notes:

- Icons are default content.
- SVG loading code is included in boilerplate and can be adapted.
- SVG loading reference: https://github.com/adobe/helix-project-boilerplate/blob/27e8571592220da8ded7c8a7e5064d982f7cfe76/scripts/scripts.js#L136-L155

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/icons
- Content document: https://docs.google.com/document/d/11j_rgUVY3jcF8CgvVJhYW5J6Sl7nIgrNa4KUse9KdeY/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_1059f889928c7ba500b00070d3d8ff183a5114580.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1cbce2934584a4720c1da51c0af0619b4deb13236.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1ecf8769c0e87923b82b667d848f2680c5c0a49ae.png?width=750&format=png&optimize=medium

## Hero

Source page: https://www.aem.live/developer/block-collection/hero

Purpose: hero treatment at the top of a page.

Authoring/implementation notes:

- Hero appears in the boilerplate list as a block.
- Sidekick Library exposes at least two variants: `Hero (autoblocking)` and `Hero (block)`.
- Hero blocks commonly combine image, heading, body text, and CTA content.
- In this project, the local hero has already been customized to use an image background with overlay text.

Code links:

- Boilerplate source: https://github.com/adobe/aem-boilerplate/tree/main/blocks/hero
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/hero&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Columns

Source page: https://www.aem.live/developer/block-collection/columns

Purpose: responsive multi-column layout.

Authoring/implementation notes:

- Columns appear in the boilerplate list as a block.
- Sidekick Library exposes at least `Columns (two columns)` and `Columns (three columns)` variants.
- Typical content structure is a table named `Columns`, with each column represented by a table cell.
- Use for side-by-side content that should stack responsively on smaller screens.

Code links:

- Boilerplate source: https://github.com/adobe/aem-boilerplate/tree/main/blocks/columns
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/columns&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Cards

Source page: https://www.aem.live/developer/block-collection/cards

Purpose: list/grid of cards with or without images and links.

Authoring/implementation notes:

- Cards appear in the boilerplate list as a block.
- Sidekick Library exposes at least `Cards` and `Cards (no images)` variants.
- Typical content structure is a table named `Cards`, with each row becoming one card.
- Cards are useful for repeated items such as products, articles, resources, or navigation tiles.

Code links:

- Boilerplate source: https://github.com/adobe/aem-boilerplate/tree/main/blocks/cards
- Library/source shown by viewer: https://github.com/adobe/aem-block-collection/tree/main/blocks/cards
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/cards&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Header

Source page: https://www.aem.live/developer/block-collection/header

Purpose: responsive site header/navigation.

Authoring notes:

- Header block is loaded automatically into the `header` element by boilerplate.
- Authors usually do not place a Header block directly in page content.
- Navigation content is loaded as a fragment, usually from a `nav` or `nav.docx` document.
- The nav document is commonly structured into branding, navigation sections, and tools.
- Previewing/publishing the nav document updates navigation across pages.
- Multiple nav documents are common for locales, languages, or site sections.

Code notes:

- Included in boilerplate.
- Boilerplate source: https://github.com/adobe/helix-project-boilerplate/tree/main/blocks/header

Reference links:

- Live output/example: https://www.aem.live/
- Content document: https://docs.google.com/document/d/1w-oNPPaAhYYxeFbAAvR25ZzFa1yMaPazfDTihE3csYE/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_1b837e02751b3093a32fc1a9ea2e5dbeb1dfa36f3.jpg?width=750&format=jpg&optimize=medium
- https://www.aem.live/developer/block-collection/media_177248657dd30dc19a0ff10deb332ed541780011b.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1e968e2faf4db3ba039d565f1b25903e0d1899ca7.png?width=750&format=png&optimize=medium

## Footer

Source page: https://www.aem.live/developer/block-collection/footer

Purpose: site footer.

Authoring notes:

- Footer block is loaded automatically into the `footer` element by boilerplate.
- Authors usually do not place a Footer block directly in page content.
- Footer content is loaded as a fragment, usually from a `footer` or `footer.docx` document.
- Footer structure and design usually change less often than page content.
- It can be useful to divide footer content into sections and decorate classes based on sequence or metadata.
- Publishing the footer document updates footer content across pages.
- Multiple footer documents are common for locales/languages.

Code notes:

- Included in boilerplate.
- Boilerplate source: https://github.com/adobe/helix-project-boilerplate/tree/main/blocks/footer

Reference links:

- Live output/example: https://www.aem.live/
- Content document: https://docs.google.com/document/d/1uasEx5ztou2NqDV9QYJt_JaQqVeSKrPSZ3BazbRuRZY/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_1b837e02751b3093a32fc1a9ea2e5dbeb1dfa36f3.jpg?width=750&format=jpg&optimize=medium
- https://www.aem.live/developer/block-collection/media_1d33b9a1b453f624458007601cb2eeab29bc74e9c.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_181644ad59113b4c9ae94605a9bc322ba6d147be0.png?width=750&format=png&optimize=medium

## Metadata

Source page: https://www.aem.live/developer/block-collection/metadata

Purpose: page metadata that becomes HTML `meta` tags.

Authoring notes:

- Use one `Metadata` table per page.
- Placement does not matter technically, but by convention it is placed at the bottom of the document.
- The table uses name/value pairs: first column is name, second column is value.
- Well-known metadata properties include `title`, `description`, and `image`.
- `og:` and `twitter:` properties support social metadata schemas.
- `theme` and `template` are special: boilerplate adds them as classes to the `body` element and they are often used for styling or autoblocking.
- Projects can add arbitrary metadata name/value pairs for custom behavior.

Code notes:

- Metadata is processed by the HTML rendering/pipeline service.
- No project code is usually needed for core metadata processing.

Reference links:

- Special metadata properties: https://www.aem.live/docs/authoring#special-metadata-properties
- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/metadata
- Content document: https://docs.google.com/document/d/1L5-FT77mPidroI9tW9lsKgmvfdTL6HdlMyZjwvHpZJ4/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_18f855a3ea6ad2149ad244fbc50e6201ff67327f9.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1c5ceea12343e75499b042c11b88bb5f24be8eabb.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_17ddec48994f91e304e5f0f990ec6c98f02c82508.png?width=750&format=png&optimize=medium

## Section Metadata

Source page: https://www.aem.live/developer/block-collection/section-metadata

Purpose: metadata for the containing section.

Authoring notes:

- Use a `Section Metadata` block/table inside a section.
- It uses name/value pairs: first column is name, second column is value.
- Most properties become `data-*` attributes on the containing section.
- Special property `Style` is added as one or more section classes.
- Special property `Id` becomes the section `id`; IDs must be unique in a document.
- Avoid Section Metadata until needed because it adds authoring complexity.

Code notes:

- The official docs say Section Metadata is handled by the HTML pipeline or boilerplate code.
- In this local project, support was added in `scripts/scripts.js` so `style = homepage` applies `.homepage` to the section.

Reference links:

- Block options/class names: https://www.aem.live/developer/markup-sections-blocks#block-options
- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/section-metadata
- Content document: https://docs.google.com/document/d/1Qa8YSrkL7ER5nY_Y2t04b1azh6IkEstGIaW3Kyf_pNc/edit#

Images exposed:

- https://www.aem.live/developer/block-collection/media_18f855a3ea6ad2149ad244fbc50e6201ff67327f9.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_182b4c98bc078eaa89cab657251a93025c0ba3338.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_171ea4bea458da82fa904163b4d823784a5bf525a.png?width=750&format=png&optimize=medium

## Embed

Source page: https://www.aem.live/developer/block-collection/embed

Purpose: embed social media or third-party content into AEM pages.

Authoring/implementation notes:

- The Sidekick Library describes Embed as a simple way to embed social media content.
- Typical implementation uses a block table named `Embed` with a URL or embed target as content.
- Adapt the CSS/JS for allowed providers and layout needs.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/embed
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/embed&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Fragment

Source page: https://www.aem.live/developer/block-collection/fragment

Purpose: share pieces of content across multiple pages.

Authoring/implementation notes:

- Fragments allow reusable document content to be inlined into pages.
- In this local project, fragment handling already exists in `blocks/fragment` and `scripts/scripts.js` autoload logic.
- A fragment link can be transformed into loaded content at runtime.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/fragment
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/fragment&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Table

Source page: https://www.aem.live/developer/block-collection/table

Purpose: organize tabular data into rows and columns.

Authoring/implementation notes:

- Sidekick Library exposes variants: `Table`, `Table (striped)`, `Table (bordered)`, `Table (striped & bordered)`, and `Table (no header)`.
- Use for real tabular data, not general layout.
- Options usually become classes such as `striped` or `bordered` on the block.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/table
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/table&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Video

Source page: https://www.aem.live/developer/block-collection/video

Purpose: display and play video content.

Authoring/implementation notes:

- Supports YouTube, Vimeo, or uploaded `.mp4` URLs according to the library text.
- Sidekick Library exposes at least `Youtube` and `Youtube (without poster)` variants.
- Typical content includes the video URL and optionally a poster/preview image.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/video
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/video&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Accordion

Source page: https://www.aem.live/developer/block-collection/accordion

Purpose: stacked labels that expand/collapse related content.

Authoring/implementation notes:

- Use for FAQ-style or compact expandable content.
- Each row/item typically has a label/summary and body content.
- Needs JavaScript for toggle behavior and CSS for open/closed states.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/accordion
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/accordion&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Breadcrumbs

Source page: https://www.aem.live/developer/block-collection/breadcrumbs

Purpose: show current page location in the navigational hierarchy.

Authoring/implementation notes:

- Listed as a block add-on.
- Often tied to header/navigation logic.
- Useful for deeper content hierarchies and SEO/a11y context.

Code links:

- Source shown by docs: https://github.com/adobe/helix-block-collection/tree/main/blocks/header

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/breadcrumbs
- Content document: https://docs.google.com/document/d/1NQ7DHAzwJW-KzEZnyOGxRLlhDlv9jOc0lZhmSgMmD8E/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_132c871bbdafd1afab03bf0da37e69e51a5cc5e96.jpg?width=750&format=jpg&optimize=medium
- https://www.aem.live/developer/block-collection/media_1d9417d22ed904616bb12620cbb7843f85de5517a.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1dad9637635f2c900267e1aa2df0ddd338235a92a.png?width=750&format=png&optimize=medium

## Carousel

Source page: https://www.aem.live/developer/block-collection/carousel

Purpose: rotating or sliding display of images with optional text content.

Authoring/implementation notes:

- Sidekick Library exposes at least `Carousel (multiple)` and `Carousel (single)` variants.
- Common content model uses one row/slide per item, with image and optional text/CTA.
- Requires JavaScript for controls, slide state, accessibility, and interaction.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/carousel
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/carousel&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Modal

Source page: https://www.aem.live/developer/block-collection/modal

Purpose: popup displayed over the current site content.

Authoring/implementation notes:

- Modal requires a user click to open and another interaction to close.
- Modal is not a traditional authored block.
- Links to a `/modals/` path automatically create a modal.
- The docs say to copy modal `.css` and `.js`, and also copy `autoLinkModals()` into `scripts.js`.

Code links:

- Block source: https://github.com/adobe/helix-block-collection/tree/main/blocks/modal
- Scripts reference: https://github.com/adobe/helix-block-collection/blob/133f5663074979d5e14ddbcf9936f3c5f1060468/scripts/scripts.js#L46C6-L56C2

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/modal
- Content document: https://docs.google.com/document/d/1SDQGi-ac58tGHpoGdAwF_aBq_mZuaJYq_FEsZHSOZNA/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_132c871bbdafd1afab03bf0da37e69e51a5cc5e96.jpg?width=750&format=jpg&optimize=medium
- https://www.aem.live/developer/block-collection/media_1004d7770d66e108f73cbed812646e33f57141588.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1969b3464503f39472835c1f1a33f0960ded97ee3.png?width=750&format=png&optimize=medium

## Quote

Provided URL in the request pointed to Modal: https://www.aem.live/developer/block-collection/modal

Intended source page: https://www.aem.live/developer/block-collection/quote

Purpose: display a quotation or pull quote.

Authoring/implementation notes:

- Overview describes Quote as a display of a quotation or highlighted passage.
- Sidekick Library exposes at least `Quote` and `Quote (with attribution)` variants.
- Common content model includes quote text and optionally attribution/source.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/quote
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/quote&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Search

Source page: https://www.aem.live/developer/block-collection/search

Purpose: allow users to search site content.

Authoring/implementation notes:

- If no content source is provided, the site `/query-index.json` is used.
- Requires block JavaScript for input handling, query loading, filtering, and results display.

Code links:

- Source shown by docs: https://github.com/adobe/helix-block-collection/tree/main/blocks/search

Reference links:

- Live output: https://main--aem-block-collection--adobe.aem.live/block-collection/search
- Content document: https://docs.google.com/document/d/16wLp79HH6EnExGdji4r4yr_EZYkP_hWhowKDbGjyIdw/edit

Images exposed:

- https://www.aem.live/developer/block-collection/media_132c871bbdafd1afab03bf0da37e69e51a5cc5e96.jpg?width=750&format=jpg&optimize=medium
- https://www.aem.live/developer/block-collection/media_1d5119673f856f65bfbf418ad684d3c26eb01856c.png?width=750&format=png&optimize=medium
- https://www.aem.live/developer/block-collection/media_1abf4714600bcbed9423f8dcb0af275b03fdd4272.jpg?width=750&format=jpg&optimize=medium

## Tabs

Source page: https://www.aem.live/developer/block-collection/tabs

Purpose: segment information into labeled tab panels.

Authoring/implementation notes:

- Sidekick Library exposes a `Tabs` block.
- Typical content model uses one item per tab with a tab label/title and panel body.
- Requires JavaScript for tab selection state, keyboard handling, and accessibility attributes.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/tabs
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/tabs&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Form

Source page: https://www.aem.live/developer/block-collection/form

Purpose: grouped input controls for user-submitted information.

Status: deprecated according to the Block Collection overview.

Authoring/implementation notes:

- Sidekick Library still exposes a `Form` block.
- Treat as a legacy/deprecated block unless an assignment specifically requires it.
- For new project forms, confirm current recommended AEM approach before implementing.

Code links:

- Source: https://github.com/adobe/aem-block-collection/tree/main/blocks/form
- Library viewer: https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks&path=/block-collection/form&index=0

Images exposed:

- The developer URL redirects to the Sidekick Library viewer; direct page image references were not exposed by the fetcher.

## Notes For This Local Project

- Do not edit `scripts/aem.js`; it is treated as vendored in this repo.
- Local custom behavior belongs in `scripts/scripts.js` or block-specific files.
- Block CSS should be scoped to the block class, such as `.hero` or `.banner`.
- Section styles should target generated section classes, such as `main .section.homepage`.
- Use `npx -y @adobe/aem-cli up` for local AEM development.
- Content should be inspected through `.plain.html` where possible before changing block code.

## Quick Future Assignment Checklist

When asked to implement a new block:

1. Check if it is default content, boilerplate block, or block collection block.
2. Confirm the authoring table shape from the Sidekick Library or source repo.
3. Add a folder under `blocks/<block-name>/` with matching `.js` and `.css` only when project code is needed.
4. Keep block JavaScript defensive because authors may omit/add cells.
5. Scope CSS to the block or section class.
6. Test locally with AEM CLI and, when possible, inspect the generated `.plain.html` markup.
