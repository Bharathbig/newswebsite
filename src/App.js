import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your components/pages
import Home from "./Components/Home";
import News from "./Components/News";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tech from "./Components/Tech";
import Sports from "./Components/Sports";
import Jobs from "./Components/Jobs";
import Entertainment from "./Components/Entertainment";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <Router>
      <Header />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
