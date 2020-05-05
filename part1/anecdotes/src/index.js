import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const VoteButton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Anecdote = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </>
  );
};

const MostVotedAnecdote = (props) => <p>{props.mostVoted}</p>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextAcecdote = () => {
    const random = Math.round(Math.random() * (anecdotes.length - 1));
    setSelected(random);
  };

  const handleVote = (props) => {
    const _votes = [...votes];
    _votes[selected] = _votes[selected] + 1;
    setVotes(_votes);
    setMostVoted(_votes.indexOf(Math.max(..._votes.map((a, b) => a))));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
      <VoteButton onClick={handleVote} text="vote" selected={selected} />
      <Button onClick={handleNextAcecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <MostVotedAnecdote text="test" mostVoted={props.anecdotes[mostVoted]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
