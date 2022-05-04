
import React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';
import { useEffect, useState } from 'react';

export default function App() {

  return (

    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/Homepage/' element={<MainPage />} />
        <Route path='/DetailedRecipe/:recipename' element={<Recipe />} />
        <Route path='*' element={<Layout />} />
      </Routes>
    </div>
  );
}
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/Homepage'>Home</Link>
          </li>
          {/* <li>
            <Link to={`DetailedRecipe/${letrecipename}`}>Recipe</Link>
          </li> */}

        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
