import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import IconImage from "../components/IconImage";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <IconImage />
        <div className="wrapper-btn">
          <Link className="btn create" to="/creation">
            Create Vote
          </Link>
          <Link className="btn join">Join Vote</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
