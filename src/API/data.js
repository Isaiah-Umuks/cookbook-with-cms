import credentials from './credentials.json';
const contentful = require('contentful');

const client = contentful.createClient(credentials);

/** DEPRECATED */
const getAllData = async () => {
  const data = await client.getEntries({
    // EVERYTHING!
  });

  console.log('All', data);
  return data.items;
};

const getRecipes = async () => {
  // const data = await client.getEntries({
  //   content_type: 'recipeGroup3',
  // });

  const response = await fetch('./recipes.json');
  console.log(response);
  const data = await response.json();
  //console.log(data);

  return data.items;
};

export { getAllData, getRecipes };

export default client;
