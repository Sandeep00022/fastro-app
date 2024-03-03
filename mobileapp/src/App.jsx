import React from "react";
import {Button} from "flowbite-react"
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Restaurant from "./pages/Restaurant";
import SingleRestaurant from "./pages/SingleRestaurant";

const App = () => {
  return <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/restaurant" element={<Restaurant/>} />
    <Route path="/singlerestaurant" element={<SingleRestaurant/>}/>
  </Routes>};

export default App;
