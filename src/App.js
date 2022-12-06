import "./App.css";
import "./stylesheets/header.css";
import "./stylesheets/home.css";
import "./stylesheets/slider.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="destinations" element={<Destinations />}></Route>
          <Route path="packages" element={<Packages />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
