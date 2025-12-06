let year;
let weatherAPIUrl = 'https://archive-api.open-meteo.com/v1/archive?latitude=41.85&longitude=-87.65&start_date='
let weatherDate = '-06-20&end_date=';
let weatherAPIValues = '-09-22&daily=apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit';

let articAPIUrl = 'https://api.artic.edu/api/v1/artworks/';

let artwork1 = 151545; // Japanese Impressionism
let artwork2 = 53474;  // Chicago
let artwork3 = 229396; // Hope

let japaneseImpressionism = document.getElementById("japaneseImpressionismYear");
let chicago = document.getElementById("chicagoYear");
let hope = document.getElementById("hopeYear");


const corsHeader = new Headers();
corsHeader.append("Access-Control-Allow-Origin", "*");

async function fetchJapaneseImpressionismYear() {
    try{
        const response = await fetch(articAPIUrl + artwork1);
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
        const response = await fetch(articAPIUrl + artwork2);
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
        const response = await fetch(articAPIUrl + artwork3);
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

async function fetchTemps() {
    try {
    year = sessionStorage.getItem("year");
    apiUrl = weatherAPIUrl + year + weatherDate + year + weatherAPIValues;
    const response = await fetch(weatherAPIUrl, {
        method: 'GET',
        headers: corsHeader
    });
    if (!response.ok) {
        console.log(response.status)
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
        console.log("Error ", error);
    }
}