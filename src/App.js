// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "../src/components/Header";
// import Home from "../src/components/Home";
// import News from "../src/components/News";
// import Sports from "../src/components/Sports";
// import Tech from "../src/components/Tech";
// import Jobs from "../src/components/Jobs";
// import Entertainment from "../src/components/Entertainment";
// import Contact from "../src/components/Contact";
// import Reporters from "../src/components/Reporters";
// const App = () => (
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/news" element={<News />} />
//       <Route path="/sports" element={<Sports />} />
//       <Route path="/tech" element={<Tech />} />
//       <Route path="/jobs" element={<Jobs />} />
//       <Route path="/entertainment" element={<Entertainment />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/reporters" element={<Reporters />} />

//     </Routes>
//   </Router>
// );

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import News from "./components/news";
import Sports from "./components/sports";
import Tech from "./components/tech";
import Jobs from "./components/jobs";
import Entertainment from "./components/entertainment";
import Contact from "./components/contact";
import Reporters from "./components/reporters";

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
