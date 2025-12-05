async function fetchCaucusYear() {
    try{
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/151545`);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        var yearArtwork1 = data.data.date_end;
        return yearArtwork1;
        
    } catch(error) {
        console.log(response.status, error);
    }
}

function fetchArtworkYear() {
    fetchCaucusYear();
}