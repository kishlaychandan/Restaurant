import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Quote from "./components/Quote/Quote.jsx";
import Contact from './components/Contact/Contact.jsx';
import Restaurant from "./components/Restaurants/Resturants/Resturants.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./components/Food/Food.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home />
      <Quote />
      <Restaurant /> */}

      <BrowserRouter>
      {/* <Contact /> */}
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/foods" element={<Food />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
