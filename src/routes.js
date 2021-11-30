import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./pages/InputData";
import Modeling from "./pages/Modeling";
import Report from "./pages/Report";

export const DashboardPage = '/';

const RoutesHtseer = () => {
   return(
       <Routes>
          <Route element={ <Home/>} path = {DashboardPage} />
          <Route element={ <Home/>} path = "HTSeer" />
          <Route element = { <Home /> }  path="home" />
          <Route element = { <InputData /> }  path="inputData" />
          <Route element = { <Modeling /> }  path="modeling" />
          <Route element = { <Report /> }  path="report" />
          <Route element = { <h1>Not Found</h1> } path="*" />
       </Routes>
   )
}

export default RoutesHtseer;