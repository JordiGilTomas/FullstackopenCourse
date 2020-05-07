import React from "react";

const ViewCountry = ({ countries }) =>
  countries.map((country) => (
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
  ));

export default ViewCountry;
