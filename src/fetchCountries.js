export default
function fetchCountries(name) {

    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    
    .then(response => {
        if (response.ok || response.status == 404) return response.json();
        throw new Error('Error fetching data');
      })
        
      .then(data => {
          if (data.length > 10) {
            return console.log('many countries');
          }
      })
        
    .catch(error => {
        console.log(error);
    })
}