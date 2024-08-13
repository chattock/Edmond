document.addEventListener('DOMContentLoaded', () => {
    const yearlyDropdown = document.getElementById('yearly-select');
    const mapDropdown = document.getElementById('map-select');
    const yearlyIframe = document.getElementById('yearlyIframe');
    const mapIframe = document.getElementById('mapIframe');
    
    const iframes = [
        yearlyIframe,
        mapIframe,
        document.querySelector('#imports iframe'),
        document.querySelector('#exports iframe'),
        document.querySelector('#re-exports iframe'),
        document.querySelector('#net-trade-1 iframe'),
        document.querySelector('#mean-net-trade iframe'),
        document.querySelector('#net-trade iframe')
    ];

    // Populate dropdowns with years, excluding 1705 and 1712
    for (let year = 1699; year <= 1770; year++) {
        if (year !== 1705 && year !== 1712) {
            const yearlyOption = document.createElement('option');
            yearlyOption.value = year;
            yearlyOption.textContent = year;
            yearlyDropdown.appendChild(yearlyOption);

            const mapOption = document.createElement('option');
            mapOption.value = year;
            mapOption.textContent = year;
            mapDropdown.appendChild(mapOption);
        }
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

    iframes.forEach(adjustIframeHeight);
});