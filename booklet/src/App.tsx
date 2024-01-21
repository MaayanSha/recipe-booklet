import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import {RecipePage} from "./components/Pages/RecipePage";
import {AdminLogin} from "./components/Pages/AdminLogin";
import {useSelector} from "react-redux";
import {RootState} from "./components/store/store";

function App() {
    const adminMode = useSelector((state: RootState) => state.adminMode);
    return (
      <Routes>
          <Route path="/" element={
              <Layout children={<RecipePage isEditable={adminMode.adminMode} />} />} />
          <Route path="/admin" element={
              <AdminLogin />
          }/>
      </Routes>
  );
}

export default App;
