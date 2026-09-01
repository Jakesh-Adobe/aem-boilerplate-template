/**
 * Data List Block
 * Consumes JSON data from spreadsheets and renders them with pagination
 */

export default async function decorate(block) {
  // Get the data source URL from block content
  const dataSourceLink = block.querySelector('a');
  if (!dataSourceLink) {
    block.innerHTML = '<p style="color: red;">Error: No data source URL provided in block</p>';
    return;
  }

  const dataSourceUrl = dataSourceLink.href;
  console.log('Data List Block: Loading data from', dataSourceUrl);

  try {
    // Convert the link URL to JSON endpoint
    const jsonUrl = new URL(dataSourceUrl);
    jsonUrl.pathname = jsonUrl.pathname.replace(/\.html$/, '.json');
    jsonUrl.searchParams.set('limit', '1000'); // Get all available data
    
    console.log('Fetching JSON from:', jsonUrl.toString());

    // Fetch the JSON data
    const response = await fetch(jsonUrl.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

    // Extract data and columns
    let items = [];
    let columns = [];

    if (data[':type'] === 'multi-sheet') {
      // Handle multi-sheet format - use first sheet
      const firstSheetName = data[':names'][0];
      items = data[firstSheetName].data || [];
      columns = data[firstSheetName].columns || [];
    } else {
      // Handle single sheet format
      items = data.data || [];
      columns = data.columns || [];
    }

    console.log('Items:', items.length, 'Columns:', columns);

    if (items.length === 0) {
      block.innerHTML = '<p>No data available</p>';
      return;
    }

    // Pagination setup
    const itemsPerPage = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Clear block content
    block.textContent = '';
    block.className = 'block data-list';

    // Create list container
    const listContainer = document.createElement('div');
    listContainer.className = 'data-list-items';
    block.append(listContainer);

    // Create pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'data-list-pagination';
    block.append(paginationContainer);

    // Function to render current page
    function renderPage(pageNum) {
      currentPage = pageNum;
      const startIdx = (pageNum - 1) * itemsPerPage;
      const endIdx = Math.min(startIdx + itemsPerPage, items.length);
      const pageItems = items.slice(startIdx, endIdx);

      console.log('Rendering page', pageNum, 'with', pageItems.length, 'items');

      // Clear and render items
      listContainer.innerHTML = '';
      const ul = document.createElement('ul');
      ul.className = 'data-list-ul';

      if (pageItems.length === 0) {
        console.warn('No items to display on this page');
        const emptyLi = document.createElement('li');
        emptyLi.textContent = 'No items available';
        ul.append(emptyLi);
      } else {
        pageItems.forEach((item, idx) => {
          console.log('Rendering item', idx, ':', item);
          const li = document.createElement('li');
          li.className = 'data-list-item';

          // Create content for each column
          const columns_map = columns.map((col) => ({
            name: col,
            value: item[col],
          }));

          // If only one column, show as simple text
          if (columns.length === 1) {
            const text = item[columns[0]] || '(empty)';
            li.textContent = text;
          } else {
            // Multiple columns: create a row structure
            const itemContent = document.createElement('div');
            itemContent.className = 'data-list-item-content';
            
            columns_map.forEach((col, idx) => {
              const span = document.createElement('span');
              span.className = `data-list-col data-list-col-${idx}`;
              const value = col.value !== undefined && col.value !== null ? String(col.value).trim() : '(empty)';
              span.textContent = value;
              itemContent.append(span);
            });

            li.append(itemContent);
          }

          ul.append(li);
        });
      }

      listContainer.append(ul);

      // Update pagination info and buttons
      renderPagination();
    }

    // Function to render pagination controls
    function renderPagination() {
      paginationContainer.innerHTML = '';

      if (totalPages <= 1) return; // No pagination needed

      const paginationDiv = document.createElement('div');
      paginationDiv.className = 'pagination-controls';

      // Previous button
      const prevBtn = document.createElement('button');
      prevBtn.textContent = '← Previous';
      prevBtn.className = 'pagination-btn';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) renderPage(currentPage - 1);
      });
      paginationDiv.append(prevBtn);

      // Page info
      const pageInfo = document.createElement('span');
      pageInfo.className = 'pagination-info';
      pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
      paginationDiv.append(pageInfo);

      // Next button
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next →';
      nextBtn.className = 'pagination-btn';
      nextBtn.disabled = currentPage === totalPages;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) renderPage(currentPage + 1);
      });
      paginationDiv.append(nextBtn);

      paginationContainer.append(paginationDiv);
    }

    // Render first page
    renderPage(1);
  } catch (error) {
    console.error('Data List Block error:', error);
    block.innerHTML = `<p style="color: red;">Error loading data: ${error.message}</p>`;
  }
}
