let style_img_map = {
    'bar': {
        'sixteenth century': [ 'assets/sixteenthCentury/img2.png', 'assets/sixteenthCentury/img3.png','assets/sixteenthCentury/img4.png', 'assets/sixteenthCentury/img5.png'],
        '20th Century': ['assets/20thcentury/1.png', 'assets/20thcentury/img2.png', 'assets/20thcentury/img3.png', 'assets/20thcentury/img4.png'],
        '17th Century': ['assets/17thcentury/img1.png', 'assets/17thcentury/img2.png', 'assets/17thcentury/img3.png', 'assets/17thcentury/img4.png'],
        'Japanese (culture or style)': ['assets/japanese/img1.png', 'assets/japanese/img2.png','assets/japanese/img3.png', 'assets/japanese/img4.png'],
        'avant-garde': ['assets/avanteGarde/img1.png','assets/avanteGarde/img2.png', 'assets/avanteGarde/img3.png', 'assets/avanteGarde/img4.png']
    },
    'doughnut': {
        'Oil on canvas': ['assets/oil on canvas/img1.png', 'assets/oil on canvas/img2.png', 'assets/oil on canvas/img3.png', 'assets/oil on canvas/img4.png'],
        'Etching in black on cream laid paper': ['assets/etching/img1.png', 'assets/etching/img2.png', 'assets/etching/img3.png', 'assets/etching/img4.png'],
        'Terracotta': ['assets/terracotta/img1.png', 'assets/terracotta/img2.png', 'assets/terracotta/img3.png','assets/terracotta/img4.png'],
        'Lithograph in black on cream wove paper': ['assets/Lithograph/img1.png', 'assets/Lithograph/img2.png', 'assets/Lithograph/img3.png', 'assets/Lithograph/img4.png'],
        'Oil on panel': ['assets/oil on panel/img1.png', 'assets/oil on panel/img2.png', 'assets/oil on panel/img3.png', 'assets/oil on panel/img4.png']
    },
    'line': {
        '1540': ['assets/1540/img1.png', 'assets/1540/img2.png', 'assets/1540/img3.png', 'assets/1540/img4.png'],
        '1575': ['assets/1575/img1.png', 'assets/1575/img2.png','assets/1575/img3.png', 'assets/1575/img4.png'],
        '1630': ['assets/1630/img1.png', 'assets/1630/img2.png', 'assets/1630/img3.png', 'assets/1630/img4.png'],
        '1667': ['assets/1667/img1.png','assets/1667/img2.png', 'assets/1667/img3.png', 'assets/1667/img4.png' ],
        '1941': ['assets/1941/img1.png', 'assets/1941/img2.png', 'assets/1941/img3.png', 'assets/1941/img4.png']
    },
    'pie': {
        'Italy': ['assets/Italy/img1.png', 'assets/Italy/img2.png','assets/Italy/img3.png', 'assets/Italy/img4.png'],
        'Paris': ['assets/Paris/img1.png','assets/Paris/img2.png', 'assets/Paris/img3.png','assets/Paris/img4.png'],
        'United States': ['assets/UnitedStates/img1.png', 'assets/UnitedStates/img2.png', 'assets/UnitedStates/img3.png', 'assets/UnitedStates/img4.png'],
        'France': ['assets/France/img1.png', 'assets/France/img2.png', 'assets/France/img3.png', 'assets/France/img4.png'],
        'Flanders': ['assets/Flanders/img1.png','assets/Flanders/img2.png','assets/Flanders/img3.png', 'assets/Flanders/img4.png' ]
    }
}

let style_url_map = {
    'bar': {
        'sixteenth century': "https://www.artic.edu/search?q=16th+century",
        '20th Century': "https://www.artic.edu/search?q=20th+century",
        '17th Century': "https://www.artic.edu/search?q=17th+century",
        'Japanese (culture or style)': "https://www.artic.edu/search?q=japanese+",
        'avant-garde': "https://www.artic.edu/search?q=avante+garde"
    },
    'doughnut': {
         'Oil on canvas': "https://www.artic.edu/search?q=oil%20on%20canvas",
         'Etching in black on cream laid paper': "https://www.artic.edu/search?q=Etching+in+black+on+cream+laid+paper",
         'Terracotta': "https://www.artic.edu/search?q=terracota",
         'Lithograph in black on cream wove paper': "https://www.artic.edu/search?q=Lithograph+in+black+on+cream+wove+paper",
         'Oil on panel': "https://www.artic.edu/search?q=Oil+on+panel"
     },
     'line': {
         '1540': "https://www.artic.edu/search?q=1540",
         '1575': "https://www.artic.edu/search?q=1575",
         '1630': "https://www.artic.edu/search?q=1630",
         '1667': "https://www.artic.edu/search?q=1667",
         '1941': "https://www.artic.edu/search?q=1941"
     },
     'pie': {
         'Italy': ["https://www.artic.edu/search?q=Italy"],
         'Paris': ["https://www.artic.edu/search?q=Paris"],
         'United States': "https://www.artic.edu/search?q=United+States",
         'France': ["https://www.artic.edu/search?q=France"],
         'Flanders': ["https://www.artic.edu/search?q=Flanders"]
     }
}

function getTopFive(data) {
    const entries = Object.entries(data);


    entries.sort(([, valueA], [, valueB]) => valueB - valueA);


    const top5Entries = entries.slice(0, 5);


    return Object.fromEntries(top5Entries);
}


async function fetchArtworks() {
    const response = await fetch('./test.json'); 
    const data = await response.json(); 
    console.log("Fetched data:", data); 
    
    
    return data.data; 
}


function createDropdown(chartType, serialNum, style) {
   
    const containerId = `container-${serialNum}`;
    const dropdownId = `dropdown-${serialNum}`

    const existingDropdown = document.querySelector(`#${dropdownId}`);
    if (existingDropdown) {
        existingDropdown.remove();
    }

    const dropdown = document.createElement('div');
    dropdown.id = dropdownId;
    dropdown.addEventListener("click", (ev) => {
        window.open(style_url_map[chartType][style], "_blank");
    })

 
    const container = document.createElement('div');
    container.className = 'img-container';


    dropdown.appendChild(container);

 
    for (image_path of style_img_map[chartType][style]) {
        const imgEle = document.createElement('img');
        imgEle.setAttribute('src', image_path);
        imgEle.className = "stylesImg";
        container.appendChild(imgEle);
    }
    
 
    const parentContainer = document.querySelector(`#${containerId}`);
    parentContainer.appendChild(dropdown);

    // GSAP animation for dropdown opening
    // gsap.fromTo(dropdown, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" });

    // Add event listener to close the dropdown
    // const closeButton = dropdown.querySelector('.close-btn');
    // closeButton.addEventListener('click', () => {
    //     gsap.to(dropdown, { opacity: 0, y: -50, duration: 0.5, ease: "power2.inOut", onComplete: () => dropdown.remove() });
    // });
}



function createBarChart(data) {
    const ctx = document.querySelector('#chart1').getContext('2d');

 
    if (!Array.isArray(data)) {
        console.error('Expected an array but received:', data);
        return;
    }

   
    const styles = data.map(item => item.style_title);
    const styleCounts = {};

    styles.forEach(style => {
        if (style) {
            styleCounts[style] = (styleCounts[style] || 0) + 1; 
        }
    });

    
    const sortedArray = Object.entries(styleCounts).sort(([, a], [, b]) => b - a);
    const sortedJsonData = Object.fromEntries(sortedArray);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(sortedJsonData).slice(0, 5), 
            datasets: [{
                label: 'Number of Artworks',
                data: Object.values(sortedJsonData).slice(0, 5),
                backgroundColor:"#E6AF2E",
                borderColor: '#D47F00',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Top 5 Art Styles',
                    font: {
                        size: 18
                    }
                }
            },
            onClick: (e) => {
                const activeElements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

                if (activeElements.length > 0) {
                    const clickedBar = activeElements[0];

                    
                    const index = clickedBar.index;

                    
                    console.log(`Clicked bar: ${chart.data.labels[index]}`);

                   
                    createDropdown("bar", 1, chart.data.labels[index]);
                }

                
                
            }
        }
    });
}

function createDoughnutChart(data) {
    const ctx = document.querySelector('#chart2').getContext('2d');
    const mediums = data.map(item => item.medium_display);
    const mediumCounts = {};

    mediums.forEach(medium => {
        if (medium) {
            mediumCounts[medium] = (mediumCounts[medium] || 0) + 1;
        }
    });

    const sortedArray = Object.entries(mediumCounts).sort(([, a], [, b]) => b - a);
    const sortedJsonData = Object.fromEntries(sortedArray);

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(sortedJsonData).slice(0, 5), // Top 5 mediums
            datasets: [{
                label: 'Number of Artworks',
                data: Object.values(sortedJsonData).slice(0, 5),
                backgroundColor: ['#D47F00', '#F5C430', '#C46D1F', '#FFBB66', '#E6AF2E']
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Largest 5 Categories of Mediums',
                    font: {
                        size: 18
                    }
                }
            },
            onClick: (e) => {
                const activeElements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

                if (activeElements.length > 0) {
                    const clickedBar = activeElements[0];

                   
                    const index = clickedBar.index;

                    
                    console.log(`Clicked bar: ${chart.data.labels[index]}`);

                    
                    createDropdown("doughnut", 2, chart.data.labels[index]);
                }
                
            }
        }
    });
}


function createLineChart(data) {
    const ctx = document.querySelector('#chart3').getContext('2d');
    const years = data.map(item => item.date_start).filter(year => year);
    let yearCounts = {};

    years.forEach(year => {
        if (year > 1100 && year < 8000) {
            yearCounts[year] = (yearCounts[year] || 0) + 1;
        }
    });

    yearCounts = getTopFive(yearCounts);
    console.log(yearCounts)

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(yearCounts).slice(0, 5),
            datasets: [{
                label: 'Number of Artworks',
                data: Object.values(yearCounts).slice(0, 5),
                fill: false,
                borderColor: '#F5C430',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Artwork Created By Year',
                    font: {
                        size: 18
                    }
                }
            },
            onClick: (e) => {
                const activeElements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

                if (activeElements.length > 0) {
                    const clickedBar = activeElements[0];

                    
                    const index = clickedBar.index;

                    
                    console.log(`Clicked bar: ${chart.data.labels[index]}`);

                    
                    createDropdown("line", 3, chart.data.labels[index]);
                }
                
            }
        }
    });

}   


function createPieChart(data) {
    const ctx = document.querySelector('#chart4').getContext('2d');
    const exhibitions = data.map(item => item.place_of_origin);
    const exhibitionCounts = {};

    exhibitions.forEach(exhibition => {
        if (exhibition) {
            exhibitionCounts[exhibition] = (exhibitionCounts[exhibition] || 0) + 1;
        }
    });

    const sortedArray = Object.entries(exhibitionCounts).sort(([, a], [, b]) => b - a);
    const sortedJsonData = Object.fromEntries(sortedArray);

    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(sortedJsonData).slice(0, 5), // Top 5 places of origin
            datasets: [{
                label: 'Number of Artworks',
                data: Object.values(sortedJsonData).slice(0, 5),
                backgroundColor: ['#E6AF2E', '#D47F00', '#F5C430', '#C46D1F', '#FFBB66']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Top 5 Sources of the Artwork',
                    font: {
                        size: 18
                    }
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            },
            onClick: (e) => {
                const activeElements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

                if (activeElements.length > 0) {
                    const clickedBar = activeElements[0];

                    
                    const index = clickedBar.index;

                    
                    console.log(`Clicked bar: ${chart.data.labels[index]}`);

                    
                    createDropdown("pie",4, chart.data.labels[index]);
                }
                
            }
        }
    });
}


fetchArtworks().then(data => {
    console.log("Data passed to charts:", data); 
    createBarChart(data);
    createDoughnutChart(data);
    createLineChart(data);
    createPieChart(data);
});




