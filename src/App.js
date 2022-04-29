
import React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';
import { useEffect, useState } from 'react';

import * as API from './App.css';
import { getRecipes, getAllData } from './API/data';


let letrecipename = 'Biryani';
// let obj = { name: 'harihs', title: 'software' };

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      getRecipes()
        .then(data => console.log(data));
    })();
  }, []);

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
