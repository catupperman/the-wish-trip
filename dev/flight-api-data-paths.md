# testing URL

https://rapidapi.com/tipsters/api/priceline-com-provider/

# get airport code by city name

# - use Search locations endpoint

## get id (which seems to be the same as airport code) for a city (e.g. "DUB" is the id for Dublin Ireland)

data[0].id

# get flight info

# - Use Search flights end point passing in: location_departure, date_departure, location_arrival

# - location_departure from Search locations API call

# - location_arrival from Search locations API call

## get price for first flight in pricedItinerary

data.pricedItinerary[0].pricingInfo.totalFare

## get unique slice id for flight in pricedItinerary data.pricedItinerary[0].slice[0].uniqueSliceId

## go to slice for flight in data

GOTO: data.slice[n]
where data.slice.uniqueSliceId = data.pricedItinerary[0].slice[0].uniqueSliceId

## get cabin info in flight slice

data.slice[n].segment[0].cabinName

## get unique segment id in flight flice

data.slice[n].segment[0].uniqueSegId

## go to flight segment in data

GOTO: data.segment[m]
where data.segment.uniqueSegId = data.slice[n].segment[0].uniqueSegId

## get rest of flight info in flight segment

data.segment[m].arrivalDateTime
data.segment[m].departDateTime
data.segment[m].destAirport
data.segment[m].duration ## flight duration in minutes
data.segment[m].flightNumber
data.segment[m].operatingAirline
data.segment[m].origAirport
data.segment[m].stopQuantity
