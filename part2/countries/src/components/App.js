import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import Countries from "./Countries";

const App = () => {
  const [newFilter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <>
      <Search handleFilter={handleFilter} />
      <Countries countries={countries} filter={newFilter} />
    </>
  );
};

export default App;
