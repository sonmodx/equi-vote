import React, { useRef, useState } from "react";
import "./Creation.css";
import IconImage from "../components/IconImage";
import ItemVote from "./components/ItemVote";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
const Creation = () => {
  const collectionRef = collection(db, "rooms");
  const [votes, setVotes] = useState([]);
  const voteRef = useRef();
  const roomNameRef = useRef();
  const navigate = useNavigate();

  const handleAddVote = () => {
    const newVote = voteRef.current.value;
    setVotes((prev) => [...prev, { [newVote]: 0 }]);
    voteRef.current.value = "";
  };

  const handleSubmit = async () => {
    const roomNameValue = roomNameRef.current.value;
    const docRef = await addDoc(collectionRef, {
      roomName: roomNameValue,
      votes: votes,
      users: [],
    });
    console.log(docRef.id);
    navigate(`/vote-room/${docRef.id}`);

    // console.log(docRef.id);
  };
  return (
    <div className="creation">
      <header className="header">
        <IconImage />
        <h1 className="title">Creating Room</h1>
        <IconImage />
      </header>
      <form>
        <div className="form-wrapper">
          <div className="input-field">
            <label htmlFor="room-name">Room name:</label>
            <input id="room-name" type="text" ref={roomNameRef} />
          </div>
          <div className="input-field">
            <label htmlFor="list-vote">Voting List:</label>
            <div className="group-input-btn">
              <input
                id="list-vote"
                type="text"
                ref={voteRef}
                onKeyDown={(e) => (e.key === "Enter" ? handleAddVote() : null)}
              />
              <button type="button" className="add btn" onClick={handleAddVote}>
                ADD
              </button>
            </div>
          </div>
          <div className="wrapper-votes">
            {votes?.map((vote, idx) => (
              <ItemVote key={idx} name={Object.keys(vote)[0]} />
            ))}
          </div>
          <button type="button" className="submit btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Creation;
