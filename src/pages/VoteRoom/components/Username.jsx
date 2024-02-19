import React, { useRef } from "react";
import "./Username.css";
const Username = ({ addUsernameInRoom }) => {
  const usernameRef = useRef();
  return (
    <form className="username">
      <input
        type="text"
        placeholder="Enter your name ..."
        autoFocus
        ref={usernameRef}
        required
      />
      <button
        type="submit"
        className="next-btn"
        onClick={() => addUsernameInRoom(usernameRef.current.value)}
      >
        NEXT
      </button>
    </form>
  );
};

export default Username;
