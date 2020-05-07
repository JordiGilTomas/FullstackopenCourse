import React from "react";
import "./Countries.css";
import ViewCountry from "./ViewCountry";

const Countries = ({ countries, filter, setCountry }) => {
  const handleShowView = ({ target }) => {
    const country = countries.filter(
      (country) => country.numericCode === target.value
    );
    setCountry(country);
  };
  const filteredCountries = countries.filter((countries) =>
    countries.name.toUpperCase().includes(filter.toUpperCase())
  );
  if (filteredCountries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  return filteredCountries.length === 1 ? (
    <ViewCountry countries={filteredCountries} />
  ) : (
    filteredCountries.map((country) => (
      <p key={country.numericCode}>
        {country.name}{" "}
        <button onClick={handleShowView} value={country.numericCode}>
          show
        </button>
      </p>
    ))
  );
};

export default Countries;
