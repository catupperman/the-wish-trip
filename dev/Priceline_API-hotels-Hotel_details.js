var axios = require("axios").default;

// gets hotel details for "Intercontinental Dublin"
var options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/details',
  params: {hotel_id: '9769103'},
  headers: {
    'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
    'x-rapidapi-key': 'ADD-API-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});