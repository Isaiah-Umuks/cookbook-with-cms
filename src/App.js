import * as React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';

let letrecipename = 'Biryani';
// let obj = { name: 'harihs', title: 'software' };

export default function App() {
  fetch('recipes.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
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
          <li>
            <Link to={`DetailedRecipe/${letrecipename}`}>Recipe</Link>
          </li>

        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
