import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Sports from "./components/Sports";
import Tech from "./components/Tech";
import Jobs from "./components/Jobs";
import Entertainment from "./components/Entertainment";
import Contact from "./components/Contact";
import Reporters from "./components/Reporters";
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reporters" element={<Reporters />} />

    </Routes>
  </Router>
);

export default App;
