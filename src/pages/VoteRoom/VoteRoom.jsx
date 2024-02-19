import React, { useEffect, useRef, useState } from "react";
import "./VoteRoom.css";
import Username from "./components/Username";
import { useParams } from "react-router-dom";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Vote from "./components/Vote";

const VoteRoom = () => {
  const [username, setUsername] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [votes, setVotes] = useState([]);
  const { id } = useParams();
  console.log(votes);

  useEffect(() => {
    onSnapshot(doc(db, "rooms", id), (doc) => {
      setAllUsers(doc.data().users);
      setVotes(doc.data().votes);
    });
  }, [username]);

  const addUsernameInRoom = async (name) => {
    setUsername(name);
    await updateDoc(doc(db, "rooms", id), {
      users: [...allUsers, name],
    });
  };

  const submitVote = async () => {
    await updateDoc(doc(db, "rooms", id), {
      votes: votes,
    });
  };

  return (
    <div className="vote-room">
      <div className="container">
        <p>Room ID: {id}</p>
        {!username && <Username addUsernameInRoom={addUsernameInRoom} />}
        {username && (
          <>
            <section className="votes">
              {votes?.map((vote, idx) => (
                <Vote
                  key={idx}
                  index={idx}
                  nameVote={Object.keys(vote)[0]}
                  votes={votes}
                  setVotes={setVotes}
                />
              ))}
            </section>
            <button onClick={submitVote}>Submit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default VoteRoom;
