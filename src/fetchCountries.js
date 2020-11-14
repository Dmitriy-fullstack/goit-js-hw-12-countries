export default
function fetchCountries(name) {

    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(Response => {
        return Response.json();
    })
    .then(country => {
        console.log(country);
        if (country.length > 10) {
            error({
                text:'Too many matches found. Please enter a more specific query',
                type: 'error'
            })
        }
    })
    .catch(error => {
        console.log(error);
    })
    
    

    
}