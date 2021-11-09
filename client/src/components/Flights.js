import { useState, useEffect } from 'react';

import SearchFlights from '../utils/API';

const Flights = () => {
  // // Declare a new state variable "results"
   const [results, setResults] = useState([]);

   const searchFlights = async (query) => {
    const response = await SearchFlights(query);
    setResults(response.data.data);
  };

  useEffect(() => {
    searchFlights();
  }, []);
  return (
    <div>
      <SearchFlights results={results} />
    </div>
  )

}

export default Flights;