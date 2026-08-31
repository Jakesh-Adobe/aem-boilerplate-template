export default function decorate(block) {
  // Extract hero image from first cell
  const firstRow = block.firstElementChild;
  if (!firstRow) return;

  const heroImageCell = firstRow.firstElementChild;
  if (!heroImageCell) return;

  const picture = heroImageCell.querySelector('picture');
  if (picture) {
    // Move the picture element to be a direct child of block for z-index layering
    picture.classList.add('hero-image');
    block.insertBefore(picture, block.firstChild);
  }

  // Wrap all content cells in a content container for proper text overlay
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-content');

  // Move all remaining content into the wrapper
  [...block.children].forEach((child) => {
    if (child !== picture) {
      contentWrapper.appendChild(child.cloneNode(true));
    }
  });

  // Remove original children except picture
  [...block.children].forEach((child) => {
    if (child !== picture) {
      child.remove();
    }
  });

  // Add the content wrapper back
  block.appendChild(contentWrapper);
}