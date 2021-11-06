const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const axios = require('axios');

const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connections');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('/hotel', async (req, res) => {
//   const response = await axios.get("https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=HLLON101&adults=1&checkInDate=2022-06-20&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true", {
//     "headers": {
//       "accept": "application/json",
//       "accept-language": "en-US,en;q=0.9",
//       "authorization": "Bearer asqdnkPXIgCOb59u7GzqlOf46I8F",
//       "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "Referer": "https://developers.amadeus.com/",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//   })
// console.log (response.data);
// })

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});