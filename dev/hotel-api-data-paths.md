# testing URL

https://rapidapi.com/tipsters/api/priceline-com-provider/

# search locations by city name (e.g. "Dublin")

# - use Search locations endpoint w/ city in "name" parameter

## get location id (e.g. 3000035826)

From Search locations > data[0].id ← this is the location id of Dublin, Ireland

# search hotels by location id (e.g. 3000035826)

# - use Search hotels endpoint w/ location_id = Search locations > data[0].id

## get hotel id from search hotels (e.g. 9769103 is the hotel id for the "Intercontinental Dublin")

From Search hotels > data.hotels[w].hotelId

## get minimum rate for hotel

From Search hotels > data.hotels[w].ratesSummary.minPrice
From Search hotels > data.hotels[w].ratesSummary.minCurrencyCode

# get hotel details by hotel id

# - use Hotel details endpoint w/ hotel_id = Search hotels > data.hotels[w].hotelId

## From Hotel details endpoint

data.name
data.description
data.starRating
(we could get other stuff, e.g. location/address)
data.images[0].imageUrl (e.g. url Image for the Intercontinental Dublin https://q-xx.bstatic.com/xdata/images/hotel/max500/260336378.jpg?k=7a163f44369ae8dd7ad5cb9a1439a43e46e61e5822c2db9719b34a2fc8d1bf3f&o=)
