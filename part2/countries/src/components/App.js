import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import Countries from "./Countries";
import ViewCountry from "./ViewCountry";

const App = () => {
  const [newFilter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleFilter = ({ target }) => {
    setFilter(target.value);
    setCountry(false);
  };

  return (
    <>
      <Search handleFilter={handleFilter} />
      <Countries
        setCountry={setCountry}
        countries={countries}
        filter={newFilter}
      />
      {country ? (
        <>
          <ViewCountry countries={country} />
        </>
      ) : null}
    </>
  );
};

export default App;
