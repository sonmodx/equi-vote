import React from "react";
import "./Home.css";
import vote from "../../assets/icon.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img className="middle-img" src={vote} alt="or" />
        <div className="wrapper-btn">
          <button className="btn create ">Create Vote</button>
          <button className="btn join">Join Vote</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
