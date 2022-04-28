import MainPage from './components/mainpage';
import Recipe from './components/recipe';
import { useEffect, useState } from 'react';

import './App.css';
import { getRecipes, getAllData } from './API/data';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes());
    })();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div>
            <p>{recipe.fields.name}</p>
            <p>{recipe.fields.description}</p>
          </div>
        );
      })}
      <MainPage />
      <Recipe />
    </div>
  );
}

export default App;
