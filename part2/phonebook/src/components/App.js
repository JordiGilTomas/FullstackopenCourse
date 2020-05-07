import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const isNotNew = () => {
    return [...persons].find((person) => person.name === newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNotNew()) alert(`${newName} is already added to phonebook`);
    else setPersons(persons.concat({ name: newName, number: newNumber }));
  };

  const handlePerson = ({ target }) => {
    setNewName(target.value);
  };

  const handleNumber = ({ target }) => setNumber(target.value);

  const handleSearch = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        handlePerson={handlePerson}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
