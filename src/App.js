import React from "react";
import "./App.css";
import { Navbar } from "./Components/Nvabar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Api } from "./Components/API";
import { FormValidation } from "./Components/FormValidation";
import { List } from "./Components/List";
import { CarouselComp } from "./Components/Carousel";
import { AutContext } from "./Components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./Components/ToDoList";
import { FAQ } from "./Components/FAQ";
import { BMI } from "./Components/BMI Calculator";

function App() {
  return (
    <React.Fragment className="app">
      <BrowserRouter>
        <Navbar />
        <AutContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api" element={<Api />} />
            <Route path="/form" element={<FormValidation />} />
            <Route path="/list" element={<List />} />
            <Route path="/carousel" element={<CarouselComp />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bmi" element={<BMI />} />
          </Routes>
        </AutContext>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
