import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div class='container-sm'>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/DetailedRecipe/:recipename' element={<Recipe />} />
      </Routes>
    </div>
  );
}
