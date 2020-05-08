import React from "react";
import "../components/Persons.css";
import phoneService from "../services/phones";

const Persons = ({ persons, filter, setPersons }) => {
  const handleDelete = ({ target }) => {
    const { name } = persons.find((person) => person.id === Number(target.id));

    if (window.confirm(`Delete ${name} ?`)) {
      setPersons(persons.filter((person) => person.id !== Number(target.id)));
      phoneService.remove(Number(target.id));
    }
  };

  return (
    <>
      {persons
        .filter(({ name }) => name.toUpperCase().includes(filter.toUpperCase()))
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button className="btnRemove" onClick={handleDelete} id={person.id}>
              delete
            </button>
          </p>
        ))}
    </>
  );
};

export default Persons;
