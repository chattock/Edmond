document.addEventListener('DOMContentLoaded', () => {
    const yearlyDropdown = document.getElementById('yearly-select');
    const mapDropdown = document.getElementById('map-select');
    const dataTypeDropdown = document.getElementById('data-type-select');
    const barDataTypeDropdown = document.getElementById('bar-data-type-select');
    const steamgraphTypeDropdown = document.getElementById('steamgraph-type-select');
    const yearlyIframe = document.getElementById('yearlyIframe');
    const mapIframe = document.getElementById('mapIframe');
    const steamgraphIframe = document.getElementById('steamgraphIframe');
    
    const iframes = [
        yearlyIframe,
        mapIframe,
        steamgraphIframe,
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

    // Update iframe src when yearly dropdown or data type changes
    const updateYearlyIframeSrc = () => {
        const selectedYear = yearlyDropdown.value;
        const selectedDataType = barDataTypeDropdown.value;
        yearlyIframe.src = `Bar_Chart/${selectedDataType}/${selectedYear}.html`;
    };

    yearlyDropdown.addEventListener('change', updateYearlyIframeSrc);
    barDataTypeDropdown.addEventListener('change', updateYearlyIframeSrc);

    // Update iframe src when map or data type dropdown selection changes
    const updateMapIframeSrc = () => {
        const selectedYear = mapDropdown.value;
        const selectedDataType = dataTypeDropdown.value;
        mapIframe.src = `Maps/${selectedDataType}/${selectedYear}.html`;
    };

    mapDropdown.addEventListener('change', updateMapIframeSrc);
    dataTypeDropdown.addEventListener('change', updateMapIframeSrc);

    // Update steamgraph iframe src when data type changes
    const updateSteamgraphIframeSrc = () => {
        const selectedDataType = steamgraphTypeDropdown.value;
        steamgraphIframe.src = `Other Graphs/Steamgraphs/${selectedDataType}.html`;
    };

    steamgraphTypeDropdown.addEventListener('change', updateSteamgraphIframeSrc);

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