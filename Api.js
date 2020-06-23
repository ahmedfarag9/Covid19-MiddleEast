export const fetchCountriesDailyData = async () => {

  //const movieNameTmp = "'" + movieName + "'"

  const url = "https://coronavirus-19-api.herokuapp.com/countries"
  
  const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      //headers: {
      //  'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      //},
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    const results = await response.json()    
    console.log(results)
    //x = results.Countries.map(processCountries)
    //const myCountry = results[25]
    //console.log(results[25])

	return results
}




