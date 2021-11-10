var axios = require("axios").default;

// Searches hotels by location_id for Dublin Ireland
var options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
  params: {
    sort_order: 'HDR',
    location_id: '3000035826',
    date_checkin: '2021-11-26',
    date_checkout: '2021-11-27'
  },
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