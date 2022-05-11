const getRecipes = async () => {
  const response = await fetch('http://localhost:3000/recipes.json');
  const data = await response.json();
  return data.items;
};

export { getRecipes };
