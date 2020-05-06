import React, { useState } from "react";

const Person = (props) => {
  return <input onChange={props.onChange}>{props.persons}</input>;
};

const Numbers = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
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
      <Numbers persons={persons} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
