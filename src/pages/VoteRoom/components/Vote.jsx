import React from "react";
import "./Vote.css";

const Vote = ({ index, nameVote, votes, setVotes }) => {
  const value = Object.values(votes[index])[0];
  console.log(nameVote, value);
  return (
    <div className="vote-field">
      <label htmlFor={nameVote}>{nameVote}:</label>
      <input
        className="vote-input"
        id={nameVote}
        type="checkbox"
        onChange={(e) => {
          setVotes(
            votes?.map((vote) =>
              nameVote === Object.keys(vote)[0]
                ? e.target.checked
                  ? { ...vote, [nameVote]: value + 1 }
                  : { ...vote, [nameVote]: value - 1 }
                : vote
            )
          );
        }}
      />
    </div>
  );
};

export default Vote;
