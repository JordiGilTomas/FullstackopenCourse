import React from "react";
import "./Countries.css";

const Countries = ({ countries, filter }) => {
  const filteredCountries = countries.filter((countries) =>
    countries.name.toUpperCase().includes(filter.toUpperCase())
  );
  if (filteredCountries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  return filteredCountries.length === 1
    ? filteredCountries.map((country) => (
        <div key={country.numericCode}>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>languages</h3>
          <ul key={country.numericCode}>
            {country.languages.map((lang) => {
              return <li key={lang.iso639_1}>{lang.name}</li>;
            })}
          </ul>
          <img src={country.flag} alt="" />
        </div>
      ))
    : filteredCountries.map((country) => (
        <p key={country.numericCode}>{country.name}</p>
      ));
};

export default Countries;
