import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/homePage";
import Toolkit from "./pages/toolkit/toolkit";
import OurStory from "./pages/our-story/ourStory";

function App() {
  return (
    <div className="App">
      <Router basename='/cong-huong'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route exact path="/toolkit" element={<Toolkit />} />
        </Routes>
        <Routes>
          <Route exact path="/our-story" element={<OurStory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
