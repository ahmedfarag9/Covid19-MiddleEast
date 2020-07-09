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
    //console.log(results)
    //x = results.Countries.map(processCountries)
    //const myCountry = results[25]
    //console.log(results[25])

	return results
}








// Fetch data to feed graphscreens
export const fetchCountryID = async (input) => {
  //console.log(CountryID)



  //const url = 'https://api.covid19api.com/live/country/Egypt/status/confirmed/date/2020-03-21T13:13:30Z' 
  //const url = 'https://api.covid19api.com/live/country/' +input+'/status/confirmed/date/2020-03-21T13:13:30Z' 
  //const url = 'https://api.covid19api.com/live/country/egypt/status/confirmed/date/2020-03-21T13:13:30Z' 
  const url = 'https://corona.lmao.ninja/v2/historical/'+input+''
  

	const response = await fetch(url)
    const result = await response.json()
  console.log(result)

	//const response = await fetch('http://www.omdbapi.com/?apikey=4e59c02d&r=json&s=Avengers')
  //console.log(result)

	return result
	
}



/*async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }*/


/*
  --> Other Api's
  //--> working Api
  //  const url = "https://api.covid19api.com/summary"

  /// New url --> It only gets total cases, total deaths and total recoverd 
  const url = "https://corona.lmao.ninja/v2/historical/Egypt"

  /// New url --> Gets all daily data 
  const url = "'https://coronavirus-19-api.herokuapp.com/countries"
  const url = "'https://coronavirus-19-api.herokuapp.com/countries/Egypt"  
  /// Another Api
  //const url = "https://api.covid19api.com/live/country/egypt/status/confirmed/date/2020-03-21T13:13:30Z"

*/

