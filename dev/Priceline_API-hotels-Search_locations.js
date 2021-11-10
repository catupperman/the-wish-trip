var axios = require("axios").default;

// Search for locations named Dublin (Dublin Irelend is first result)
var options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
  params: {name: 'Dublin'},
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