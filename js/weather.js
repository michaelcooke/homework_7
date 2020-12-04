function gettingJSON () {
  // Display the forecast
  // Your code here.
  const API_KEY = '63673ab96e5f5738edbf4614f1587fb4'

  // Set default location if one isn't provided
  let location

  // Your code here.
  console.log('Location is : ' + location)

  // Set default temperature format if one isn't provided
  let format

  // Your code here.
  console.log('Format is ' + format)

  // Set the query
  let query
  // Your code here.

  console.log('Query is :' + query)

  // Create and set variables for each of the elements you
  // need to update, location, temp, the image, etc.

  let loc
  let temp
  let tempImg
  // Your code here.

  $.getJSON(query, function (json) {
    // Use returned json to update the values of the three
    // elements in HTML.
    // I would print the JSON to the console
    // Your code here.
  })
}
