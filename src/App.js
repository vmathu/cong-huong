import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import HomePage from "./pages/home-page/homePage";
import Toolkit from "./pages/toolkit/toolkit";
import OurStory from "./pages/our-story/ourStory";
import ToolDetailPage from './pages/toolkit/toolDetailPage';

import ScrollToTop from './components/scrollToTop';
import { toolkitData } from './data/data';

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

  return (
    <div className="App">
      <Router basename='/cong-huong'>
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
      </Router>
    </div>
  );
}

export default App;
