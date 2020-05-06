import React, { useState } from "react";

const Person = (props) => {
  return <input onChange={props.onChange}>{props.persons}</input>;
};

const Numbers = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const isNotNew = () => {
    return [...persons].find((person) => person.name === newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNotNew()) alert(`${newName} is already added to phonebook`);
    else setPersons(persons.concat({ name: newName }));
  };

  const handlePerson = ({ target }) => {
    setNewName(target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <Person onChange={handlePerson} />
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
