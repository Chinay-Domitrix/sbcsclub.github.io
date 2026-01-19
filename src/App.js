import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About.js";
import Admin from "./pages/admin/Admin.js";

//pages
import Credit from "./pages/clubcredit/Credit.js";
import Home from "./pages/home/Home.js";
import Workshops from "./pages/workshops/Workshops.js";

document.getElementsByTagName("html")[0].classList.add("disabled");
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/clubcredit" element={<Credit />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
