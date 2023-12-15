import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import {Landing} from "./components/Landing";
import Layout from "./components/Layout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout children={"this is content"}/>} />
      </Routes>
  );
}

export default App;
