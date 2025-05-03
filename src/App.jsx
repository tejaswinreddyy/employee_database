import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import Employeelist from "./Components/Employeelist";
import SingleEmployee from "./Components/SingleEmployee";
import UpdateEmp from "./Components/UpdateEmp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Employeelist />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/emplist" element={<Employeelist />} />
          <Route path="/emp/:id" element={<SingleEmployee />} />
          <Route path="/update" element={<UpdateEmp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
