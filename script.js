document.addEventListener('DOMContentLoaded', () => {
    const yearDropdown = document.getElementById('year-select');
    const yearlyIframe = document.getElementById('yearlyIframe');
    const notebookIframe = document.getElementById('notebookIframe');

    // Populate the dropdown with years
    for (let year = 1699; year <= 1770; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearDropdown.appendChild(option);
    }

    // Set default selection
    yearDropdown.value = 1699;

    // Update iframe src when dropdown selection changes
    yearDropdown.addEventListener('change', (event) => {
        const selectedYear = event.target.value;
        yearlyIframe.src = `Bar_Chart/${selectedYear}.html`;
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
        }, 1000); // Adjust the interval as needed
    };

    adjustIframeHeight(yearlyIframe);
    adjustIframeHeight(notebookIframe);
});