
mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGkxOTE4MDAiLCJhIjoiY2xia2ZvOWQ3MDM1bTNvbzZrNGpvNzRiNCJ9.jZshFiWTOhzNDwBpz1oWTw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [30, 30], // starting position [lng, lat]
    zoom: 1, // starting zoom
});



function updateMap(){
    fetch('/data.json').then(response => response.json()).then(rsp =>{
        console.log(rsp.data);
        rsp.data.forEach(element =>{
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;
            if(cases > 255){
                color = 'rgb(255,0,0)';
            }
            else{
                color = `rgb(${cases},0,0)`;
            }

            // Mark on the map 

            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
                 
        })
    });
};

updateMap();



/*function updateMap() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d86566134msheae08cae8449918p17e138jsne0c9e42db961',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };

    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(response => response.json()).then(rsp => {
            console.log(rsp.countries_stat);
           
                rsp.countries_stat.forEach(element => {
                    
                    totalDeth = element.totalDeth;
                    totalCases = element.totalCases;
                    acticeCases = element.acticeCases;
                    countryName = element.country_name;
                    totalRecovered = element.total_recovered;
                    newDeth = element.new_deaths;
                    newCases = element.new_cases;
                    totalTests = element.total_tests;
                    
                    if (acticeCases > 255) {
                        color = 'rgb(255,0,0)';
                    }
                else {
                    color = `rgb(${acticeCases},0,0)`;
                }

                // Mark on the map 

                new mapboxgl.Marker({
                    draggable: true,
                    color: color
                })
                .setLngLat([-35, 30])
                .addTo(map);
                
            });
        });
        
};

updateMap();*/