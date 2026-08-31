# Workshop 3 Implementation Guide

Use this guide with the Workshop 3 code changes in this repository.

## Code Changes Included

The repo now supports:

- Auto-embedding standalone YouTube, Vimeo, Twitter, and X links as `Embed` blocks.
- A new `blocks/embed/` block copied/adapted from the AEM Block Collection.
- A CSS-only custom icon named `spark`, usable with `:spark:` in authored content.
- Icons inside standalone links can still become buttons.

Touched files:

- `scripts/scripts.js`
- `blocks/embed/embed.js`
- `blocks/embed/embed.css`
- `styles/styles.css`

## Assignment 1: Create Content Using Each EDS Content Type/Block

Create a Workshop 3 page in the AEM editor, for example `/workshop-3`.

Use this checklist to include each common EDS/default content type and boilerplate block:

- Heading: use Heading 1 through Heading 3 styles.
- Text: add normal paragraphs with bold, italic, underline, and links.
- Image: insert an image and add alt text.
- List: add a bullet list and numbered list.
- Link: add an internal and external link.
- Button: add a standalone link and make it bold or italic.
- Code: add inline fixed-width text and a multiline fixed-width code block.
- Section: separate areas with horizontal rules or `---`.
- Icon: use `:spark:` or another available icon notation.
- Hero block: create a `Hero` table using your existing hero structure.
- Columns block: create a `Columns` table with two or three columns.
- Cards block: create a `Cards` table with one row per card.
- Banner block: use the custom `Banner` block from Workshop 2 if that branch/code is available.
- Metadata block: add page title/description/image metadata at the bottom.
- Section Metadata block: add a style or id to one section.

Example Metadata table:

| Metadata | |
| --- | --- |
| title | Workshop 3 - EDS Blocks |
| description | Practice page using common Edge Delivery Services content types and blocks. |

Example Section Metadata table:

| Section Metadata | |
| --- | --- |
| style | homepage |
| id | workshop-3-content |

## Assignment 2: Create A Custom Icon In CSS And Use It On A Button

A CSS-only icon named `spark` has been added.

Author this in your AEM document as a standalone link on its own line. Make the full link bold to turn it into a primary button:

```text
:spark: Explore Workshop 3
```

Then link that text to the target page, such as `/workshop-3`, and apply bold formatting.

Expected result:

- A button is created from the standalone bold link.
- The `:spark:` marker becomes a CSS-drawn plus/spark icon.
- The icon inherits the button text color.

## Assignment 3: Create Page By Embedding YouTube And Twitter/X Links

Create a page, for example `/workshop-3-embeds`.

For auto-embedding, place each media URL on its own line as the only content in that paragraph.

Example YouTube link:

```text
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Example Twitter/X link:

```text
https://twitter.com/Adobe/status/1731712071863218306
```

or:

```text
https://x.com/Adobe/status/1731712071863218306
```

Expected result:

- YouTube links become responsive embedded iframes.
- Twitter/X links become embedded social posts using Twitter widgets.
- Vimeo links are also supported by the same block.

You can also author an explicit Embed block if needed:

| Embed | |
| --- | --- |
| https://www.youtube.com/watch?v=dQw4w9WgXcQ | |

## Assignment 4: Create Reusable Content Called Teaser And Use It On Multiple Pages

This should be authored as a fragment/reusable content document.

Create a reusable content page/document at:

```text
/fragments/teaser
```

Add teaser content, for example:

```text
## Featured Teaser

Use this reusable teaser anywhere you need shared promotional content.

Learn More
```

Link `Learn More` to the destination page and make it bold or italic if it should become a button.

Then use the teaser on multiple pages by placing a standalone link to the fragment:

```text
https://<your-preview-domain>/fragments/teaser
```

or, if authoring allows a site-relative link:

```text
/fragments/teaser
```

Expected result:

- The fragment content is loaded into each page.
- Updating `/fragments/teaser` updates every page that references it after preview/publish.

Authoring note from David's Model: use fragments when reuse is worth the extra indirection. Avoid fragments for SEO-critical content that should be unique to a page.

## Assignment 5: Create New Pages And Add Them In Header Navigation

Create the new pages first, for example:

- `/workshop-3`
- `/workshop-3-embeds`
- `/products`
- `/about`

Then update your navigation document, usually:

```text
/nav
```

The boilerplate header loads navigation from `/nav` unless page metadata sets a different nav path.

Typical nav authoring structure:

1. Brand/logo section.
2. Navigation links section.
3. Tools/actions section.

Add links to your new pages in the navigation section, then preview and publish the `nav` document. Header changes apply across pages that use that nav.

Example nav links:

```text
Home -> /
Workshop 3 -> /workshop-3
Embeds -> /workshop-3-embeds
Products -> /products
About -> /about
```

## Testing Checklist

After code is pushed and content is previewed:

- Visit the Workshop 3 content page and confirm headings, text, images, lists, buttons, icons, sections, metadata, hero, columns, and cards render correctly.
- Confirm `:spark:` appears inside a button and does not show a broken image icon.
- Visit the embeds page and confirm YouTube and Twitter/X render as embeds.
- Visit two pages that reference `/fragments/teaser` and confirm the same teaser appears in both.
- Update `/fragments/teaser`, preview/publish it, and confirm both pages update.
- Preview/publish `/nav` and confirm the header shows the new page links.

## Git Commands

Create a separate branch for Workshop 3 if you have not already:

```bash
git checkout main
git pull origin main
git checkout -b workshop-3
```

Commit after validating locally:

```bash
git add scripts/scripts.js styles/styles.css blocks/embed docs/workshop-3-implementation-guide.md
git commit -m "Add Workshop 3 embed and icon support"
git push origin workshop-3
```
