export default function decorate(block) {
  // Reorganize banner structure for proper side-by-side layout
  // Structure: Extract image, title, content, CTA into proper layout
  
  block.classList.add('banner-block');

  // Find elements
  let imageCol = null;
  let titleCol = null;
  const contentRows = [];
  let ctaCol = null;

  const rows = [...block.children];

  rows.forEach((row, index) => {
    const cols = [...row.children];
    const col = cols[0]; // Get first column
    const picture = col.querySelector('picture');

    if (picture) {
      // This is the image
      imageCol = col;
    } else if (!titleCol && col.querySelector('h1, h2, h3')) {
      // First heading row is the title, regardless of image position
      titleCol = col;
    } else if (col.querySelector('a')) {
      // Row with link is the CTA
      ctaCol = col;
    } else {
      // Other rows are content
      contentRows.push(col);
    }
  });

  // Clear the block and rebuild structure
  block.innerHTML = '';

  // Create new flex row for layout
  const mainRow = document.createElement('div');
  mainRow.classList.add('banner-row', 'banner-main-row');

  // Add image to left side
  if (imageCol) {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('banner-col', 'banner-image-col');
    const picture = imageCol.querySelector('picture');
    if (picture) {
      imageWrapper.appendChild(picture.cloneNode(true));
    }
    mainRow.appendChild(imageWrapper);
  }

  // Add content to right side
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('banner-col', 'banner-content-col');

  // Add title
  if (titleCol) {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('banner-title-col');
    const heading = titleCol.querySelector('h1, h2, h3');
    if (heading) {
      const newHeading = heading.cloneNode(true);
      newHeading.classList.add('banner-title');
      titleDiv.appendChild(newHeading);
    } else {
      titleDiv.textContent = titleCol.textContent;
    }
    contentWrapper.appendChild(titleDiv);
  }

  // Add content rows
  contentRows.forEach((row) => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('banner-content-text');
    contentDiv.innerHTML = row.innerHTML;
    contentWrapper.appendChild(contentDiv);
  });

  // Add CTA button
  if (ctaCol) {
    const ctaDiv = document.createElement('div');
    ctaDiv.classList.add('banner-cta-col');
    const links = ctaCol.querySelectorAll('a');
    links.forEach((link) => {
      const newLink = link.cloneNode(true);
      newLink.classList.add('banner-cta-button');
      ctaDiv.appendChild(newLink);
    });
    // If no link, just add the text
    if (links.length === 0) {
      ctaDiv.textContent = ctaCol.textContent;
    }
    contentWrapper.appendChild(ctaDiv);
  }

  mainRow.appendChild(contentWrapper);
  block.appendChild(mainRow);
}
