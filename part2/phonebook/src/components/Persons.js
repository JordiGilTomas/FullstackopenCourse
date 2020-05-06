import React from "react";

const Persons = ({ persons, filter }) => {
  return (
    <>
      {persons
        .filter(({ name }) => name.toUpperCase().includes(filter.toUpperCase()))
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
