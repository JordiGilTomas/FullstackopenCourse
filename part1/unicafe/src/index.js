import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Statistics = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculateStats = (value) => {
    const total = all + 1;
    const isGood = value === 1 ? value : 0;
    setAll(total);
    setAverage((good - bad + value) / total);
    setPositive(((good + isGood) / total) * 100);
  };
  const goodFeedback = () => {
    setGood(good + 1);
    calculateStats(1);
  };

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
    calculateStats(0);
  };

  const badFeedback = () => {
    setBad(bad + 1);
    calculateStats(-1);
  };

  return all ? (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodFeedback} name="good" />
      <Button handleClick={neutralFeedback} name="neutral" />
      <Button handleClick={badFeedback} name="bad" />
      <h2>statistics</h2>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={`${positive} %`} />
    </div>
  ) : (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodFeedback} name="good" />
      <Button handleClick={neutralFeedback} name="neutral" />
      <Button handleClick={badFeedback} name="bad" />
      <h2>statistics</h2>
      <h3>No feedback given</h3>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
