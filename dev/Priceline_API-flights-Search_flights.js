var axios = require("axios").default;

// search for roundtrip flights PHL to DUB 
var options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
  params: {
    sort_order: 'TRAVELTIME',
    location_departure: 'PHL',
    date_departure: '2021-12-01',
    class_type: 'ECO',
    location_arrival: 'DUB',
    itinerary_type: 'ROUND_TRIP',
    price_max: '20000',
    date_departure_return: '2021-12-08',
    duration_max: '2051',
    price_min: '100',
    number_of_passengers: '1'
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