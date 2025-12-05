let japaneseImpressionism = document.getElementById("japaneseImpressionismYear");
let chicago = document.getElementById("chicagoYear");
let hope = document.getElementById("hopeYear");

async function fetchJapaneseImpressionismYear() {
    try{
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/151545`);
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
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/53474`);
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
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/229396`);
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