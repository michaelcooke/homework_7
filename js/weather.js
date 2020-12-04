function gettingJSON () {
  // Display the forecast
  const API_KEY = '63673ab96e5f5738edbf4614f1587fb4'

  // Set default location if one isn't provided
  let location = document.querySelector('#location').value

  if (!location || location.length === 0) {
    location = 'Ann Arbor'
  }

  // Set default temperature format if one isn't provided
  let format = 'imperial'

  if (document.getElementById('celcius').checked) {
    format = document.querySelector('#celcius').value
  }

  // Set the query
  const query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=' + format + '&appid=' + API_KEY

  $.getJSON(query, function (json) {
    document.getElementById('forecast').style.display = 'block'

    const tempImg = document.getElementById('tempImg')
    tempImg.alt = json.weather[0].description
    tempImg.src = 'https://openweathermap.org/img/w/' + json.weather[0].icon + '.png'
    tempImg.title = json.weather[0].main

    document.getElementById('loc').innerHTML = json.name
    document.getElementById('temp').innerHTML = json.main.temp
  })
}
