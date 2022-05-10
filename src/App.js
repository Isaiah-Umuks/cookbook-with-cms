import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Recipe from './components/recipe';
import MainPage from './components/mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import { getRecipes } from './API/data';

export default function App() {
  const { recipename } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      getRecipes().then((jsonobj) => setData(jsonobj));
    })();
  }, [recipename]);

  return (
    <div className='container-sm'>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage data={data} />} />
        <Route
          path='/DetailedRecipe/:recipename'
          element={<Recipe data={data} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
