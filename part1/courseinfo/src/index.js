import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

const Content = (props) => {
  const parts = props.parts.map((part, index) => (
    <Part key={index} name={part.name} exercises={part.exercises} />
  ));
  return <div>{parts}</div>;
};

const Total = (props) => {
  const total = props.parts.reduce((acc, { exercises }) => {
    return acc + exercises;
  }, 0);
  return <p>NUmber of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
