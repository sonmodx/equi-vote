import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Creation from "./pages/Creation/Creation";
import VoteRoom from "./pages/VoteRoom/VoteRoom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="/vote-room/:id" element={<VoteRoom />} />
        <Route path="/dad" element={<h2>Dad</h2>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
