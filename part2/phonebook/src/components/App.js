import React, { useState } from "react";

const Person = (props) => {
  return <input onChange={props.onChange}>{props.persons}</input>;
};

const Numbers = ({ persons, filter }) => {
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
      <form>
        <div>
          filter shown with: <input onChange={handleSearch} />
        </div>
        <h2>add new</h2>
        <div>
          name: <Person onChange={handlePerson} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={newFilter} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
