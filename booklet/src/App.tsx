import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import {Landing} from "./components/Landing";
import Layout from "./components/Layout";
import {RecipeList} from "./components/Features/RecipeList";
import {getIngredientInventory} from "./components/Data/FetchIngredientInventory";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./components/store/store";
import {AppDispatch} from "./components/store/store";
import {fetchRecipesAsync} from "./components/store/RecipeInventorySlice";
import Select from "./components/UI/Select";
import {RecipePage} from "./components/Pages/RecipePage";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout children={<RecipePage />} />} />
      </Routes>
  );
}

export default App;
