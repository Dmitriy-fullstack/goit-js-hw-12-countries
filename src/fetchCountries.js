export default
function fetchCountries(name) {

    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    
    .then(response => {
        if (response.ok || response.status == 404) return response.json();
        throw new Error('Error fetching data');
      })
        
      .then(data => {
          if (data.length > 10) {
            return error({
                text:'Too many matches found. Please enter a more specific query',
                type: 'error'
            })
          }
      })
        
    .catch(error => {
        console.log(error);
    })

    
    

    
}