import React from "react";

const PersonForm = (props) => {
  return (
    <form>
      <div>
        name: <input onChange={props.handlePerson} />
      </div>
      <div>
        number: <input onChange={props.handleNumber} />
      </div>
      <div>
        <button onClick={props.handleSubmit} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
