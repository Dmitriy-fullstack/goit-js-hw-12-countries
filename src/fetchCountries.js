export default
function fetchCountries(name) {

    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    
    .then(response => {
        if (response.ok || response.status == 404) return response.json();
        throw new Error('Error fetching data');
      })
        
             
    .catch(error => {
        console.log(error);
    })
}