import React, { useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [newFilter, setFilter] = useState("");

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
