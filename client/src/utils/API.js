import axios from 'axios';
import React from 'react';

// var axios = require("axios").default;
// ​
// gets ids for locations named "Dublin"
// var options = {
//   method: 'GET',
//   url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
//   params: {name: 'Dublin'},
//   headers: {
//     'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
//     'x-rapidapi-key': 'ddd578e581msh5c1096c3181d1a0p1d59c8jsn253cf63240a9'
//   }
// };
// ​
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const SearchFlights = (query) => {
  return axios.get(`https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=Dublin&x-rapidapi-host=priceline-com-provider.p.rapidapi.com&x-rapidapi-key=ddd578e581msh5c1096c3181d1a0p1d59c8jsn253cf63240a9`);
}