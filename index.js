let year;
let weatherAPIUrl = 'https://archive-api.open-meteo.com/v1/archive?latitude=41.85&longitude=-87.65&start_date=';
let weatherDate = '-06-20&end_date=';
let weatherAPIValues = '-09-22&daily=apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch';

let articAPIUrl = 'https://api.artic.edu/api/v1/artworks/';

let artwork1 = 151545; // Japanese Impressionism
let artwork2 = 53474;  // Chicago
let artwork3 = 229396; // Hope

let japaneseImpressionism = document.getElementById("japaneseImpressionismYear");
let chicago = document.getElementById("chicagoYear");
let hope = document.getElementById("hopeYear");

let maxTempId = document.getElementById("maxTemp");
let minTempId = document.getElementById("minTemp");

const corsHeader = new Headers();
corsHeader.append("Access-Control-Allow-Origin", "*");

async function fetchJapaneseImpressionismYear() {
    try{
        let apiUrl = articAPIUrl + artwork1;
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let japaneseImpressionismYear = data.data.date_end;
        return japaneseImpressionismYear;
    } catch(error) {
        console.log(response.status, error);
    }
}

async function fetchChicagoYear() {
    try{
        let apiUrl = articAPIUrl + artwork2;
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let chicagoData = data.data.date_end;
        return chicagoData;
    } catch(error) {
        console.log(response.status, error);
    }
}

async function fetchHopeYear() {
    
    try{
        let apiUrl = articAPIUrl + artwork3;
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let hopeData = data.data.date_end;
        return hopeData;
        
    } catch(error) {
        console.log(response.status, error);
    }
}

async function fetchArtworkYear() {
    chicago.innerHTML = await fetchChicagoYear();
    japaneseImpressionism.innerHTML = await fetchJapaneseImpressionismYear();
    hope.innerHTML = await fetchHopeYear();
}

function setYear(y) {
    sessionStorage.setItem("year", y);
}

function findMaxMin(maxTemps, minTemps) {
    let maxTemp = -Infinity;
    let minTemp = Infinity;

    for (let i = 0; i < maxTemps.length; i++) {
        if (maxTemps[i] > maxTemp) {
            maxTemp = maxTemps[i];
        }
        if (minTemps[i] < minTemp) {
            minTemp = minTemps[i];
        }
    }
    return [maxTemp, minTemp];
}

async function fetchTemps() {
    try {
    year = sessionStorage.getItem("year");
    apiUrl = weatherAPIUrl + year + weatherDate + year + weatherAPIValues;
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: corsHeader
    });
    if (!response.ok) {
        console.log(response.status)
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    let maxTemps = data.daily.apparent_temperature_max;
    let minTemps = data.daily.apparent_temperature_min;
    
    let temps = findMaxMin(maxTemps, minTemps);
    maxTempId.innerHTML = temps[0];
    minTempId.innerHTML = temps[1];

    console.log(data);
} catch (error) {
        console.log("Error ", error);
    }
}