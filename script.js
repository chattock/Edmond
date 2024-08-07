document.addEventListener('DOMContentLoaded', () => {
    const yearlyDropdown = document.getElementById('yearly-select');
    const mapDropdown = document.getElementById('map-select');
    const yearlyIframe = document.getElementById('yearlyIframe');
    const mapIframe = document.getElementById('mapIframe');
    const notebookIframe = document.getElementById('notebookIframe');

    // Populate the dropdowns with years
    for (let year = 1699; year <= 1770; year++) {
        const yearlyOption = document.createElement('option');
        yearlyOption.value = year;
        yearlyOption.textContent = year;
        yearlyDropdown.appendChild(yearlyOption);
        
        const mapOption = document.createElement('option');
        mapOption.value = year;
        mapOption.textContent = year;
        mapDropdown.appendChild(mapOption);
    }

    // Set default selection
    yearlyDropdown.value = 1699;
    mapDropdown.value = 1699;

    // Update iframe src when yearly dropdown selection changes
    yearlyDropdown.addEventListener('change', (event) => {
        const selectedYear = event.target.value;
        yearlyIframe.src = `Bar_Chart/${selectedYear}.html`;
    });

    // Update iframe src when map dropdown selection changes
    mapDropdown.addEventListener('change', (event) => {
        const selectedYear = event.target.value;
        mapIframe.src = `Maps/${selectedYear}.html`;
    });

    // Adjust iframe height periodically
    const adjustIframeHeight = (iframe) => {
        setInterval(() => {
            try {
                const iframeContent = iframe.contentWindow.document.body.scrollHeight;
                iframe.style.height = iframeContent + 'px';
            } catch (e) {
                console.error("Error adjusting iframe height: ", e);
            }
        }, 1000);
    };
    
    adjustIframeHeight(yearlyIframe);
    adjustIframeHeight(notebookIframe);
    adjustIframeHeight(mapIframe);
});