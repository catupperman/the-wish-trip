import axios from 'axios';

export const getMe = (token) => {
   return fetch('/api/users/me', {
     headers: {
       'Content-Type': 'application/json',
       authorization: `Bearer ${token}`,
     },
   });
 };

 export const createUser = (userData) => {
   return fetch('/api/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(userData),
   });
 };
 
 export const loginUser = (userData) => {
   return fetch('/api/users/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(userData),
   });
 };

 export const saveTrip = (tripData, token) => {
   return fetch('/api/users', {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
       authorization: `Bearer ${token}`,
     },
     body: JSON.stringify(tripData),
   });
 };

 export const deleteTrip = (tripId, token) => {
   return fetch(`/api/users/books/${tripId}`, {
     method: 'DELETE',
     headers: {
       authorization: `Bearer ${token}`,
     },
   });
 };
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