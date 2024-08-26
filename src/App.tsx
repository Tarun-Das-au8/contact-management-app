import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ChartsMaps from "./pages/ChartsMaps";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/charts-maps" element={<ChartsMaps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
