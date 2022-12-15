import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import HomePage from "./pages/home-page/homePage";
import Toolkit from "./pages/toolkit/toolkit";
import OurStory from "./pages/our-story/ourStory";
import ToolDetailPage from './pages/toolkit/toolDetailPage';

import ScrollToTop from './components/scrollToTop';
import { comboData, toolkitData } from './data/data';
import ComboDetailPage from './pages/home-page/comboDetailPage';

function App() {
  const [toolId, setToolId] = React.useState([]);
  React.useEffect(() => {
    async function getAllTool() {
      const tools = toolkitData;
      const toolId = tools.map((tool) => tool._id);
      setToolId(toolId.map((id) => id));
    }

    try {
      getAllTool();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [comboId, setComboId] = React.useState([]);
  React.useEffect(() => {
    async function getAllCombo() {
      const combos = comboData;
      const comboId = combos.map((combo) => combo._id);
      setComboId(comboId.map((id) => id));
    }

    try {
      getAllCombo();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route exact path="/toolkit" element={<Toolkit />} />
        </Routes>
        <Routes>
          <Route exact path="/our-story" element={<OurStory />} />
        </Routes>
        {toolId.map((id) => (
          <Link to={`tool-detail/${id}`} />
        ))}
        <Routes>
          <Route
            exact
            path="/tool-detail/:id"
            element={<ToolDetailPage />}
          />
        </Routes>
        {comboId.map((id) => (
          <Link to={`combo-detail/${id}`} />
        ))}
        <Routes>
          <Route
            exact
            path="/combo-detail/:id"
            element={<ComboDetailPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
