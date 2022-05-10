const getRecipes = async () => {
  const response = await fetch('./recipes.json');
  const data = await response.json();

  return data.items;
};

export { getRecipes };
