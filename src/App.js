import React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getRecipes, getAllData } from './API/data';
import NavBar from './components/NavBar';


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

    <div class="container-sm">
       <NavBar />
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
    <MainPage />
      <nav>
        <ul>
          <li>
            {/* <Link to='/HomePage'>Home</Link> */}
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
