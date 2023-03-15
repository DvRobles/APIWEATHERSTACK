const request = require('postman-request');

    // const apiKey = "e052fa8bbfbd25faa4601dbbfa57c1fd"

    // const request = `http://api.weatherstack.com/current?access_key=${apiKey}&query= New York`

    request('http://api.weatherstack.com/current?access_key=e052fa8bbfbd25faa4601dbbfa57c1fd&query=New York', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
