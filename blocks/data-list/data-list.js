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

    console.log('=== DATA LIST DEBUG ===');
    console.log('Total items:', items.length);
    console.log('Columns detected:', columns);
    console.log('First item raw data:', items[0]);
    console.log('First item keys:', items[0] ? Object.keys(items[0]) : 'No items');
    
    // Fallback: if no columns detected, extract from first item
    if ((columns.length === 0 || !columns) && items.length > 0) {
      columns = Object.keys(items[0]);
      console.log('Columns extracted from first item:', columns);
    }

    console.log('Final columns:', columns);

    if (items.length === 0 || !columns || columns.length === 0) {
      block.innerHTML = '<p style="color: red; padding: 20px;">Error: No data or columns found. Items: ' + items.length + ', Columns: ' + (columns ? columns.length : 0) + '</p>';
      return;
    }

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
          console.log('--- Item', idx, '---');
          console.log('Item object:', item);
          console.log('Item keys:', Object.keys(item));
          
          const li = document.createElement('li');
          li.className = 'data-list-item';

          // If only one column, show as simple text
          if (columns.length === 1) {
            const colName = columns[0];
            const text = String(item[colName] || '(empty)');
            console.log('Single column mode, column:', colName, 'value:', text);
            li.textContent = text;
          } else {
            // Multiple columns: create a row structure
            const itemContent = document.createElement('div');
            itemContent.className = 'data-list-item-content';
            
            columns.forEach((colName, colIdx) => {
              const val = item[colName];
              const value = val !== undefined && val !== null ? String(val).trim() : '(empty)';
              console.log(`  Column ${colIdx} (${colName}): "${value}"`);
              
              const span = document.createElement('span');
              span.className = `data-list-col data-list-col-${colIdx}`;
              span.textContent = value;
              span.style.padding = '8px'; // Explicit styling to ensure visibility
              itemContent.append(span);
            });

            li.append(itemContent);
          }

          console.log('Created LI element:', li.outerHTML.substring(0, 200));
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
