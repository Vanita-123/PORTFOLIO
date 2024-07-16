import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./Pages/Skill";
import Contacts from "./Pages/Contacts";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/all-project" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
