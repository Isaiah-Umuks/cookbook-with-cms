import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Link } from 'react-router-dom';
import Footer from './footer.js';
import { getRecipes } from '../API/data.js'; //data.js file

const article = (data) => {
  // console.log(data.filter(data => data.fields.name === 'Quinoa and Eggplant Stuffed Peppers'));
  console.log(data);
  const result = data;
  return result.map((iteration) => {
    return (
      <div className='col-4'>
        <div className='card w-100 md-4' style={{ border: 'white' }}>
          <img
            alt='testing'
            className='card-img'
            src={iteration.fields.image.fields.file.url}
          />
          <div className='card-body'>
            <p
              className='card-text'
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {iteration.fields.name}
            </p>
          </div>
        </div>
        <Link
          className='btn btn-primary'
          to={`/DetailedRecipe/${iteration.fields.name}`}
        >
          Read more
        </Link>
      </div>
    );
  });
};
const MainPage = () => {
  const [fetchdata, setFetchdata] = useState();
  useEffect(() => {
    (async () => {
      getRecipes().then((jsonobj) => setFetchdata(article(jsonobj)));
    })();
  }, []);
  return (
    <div>
      <main className='m-0 jumbotron'>
        <div className='topper container'>
          <div
            style={{
              backgroundImage: 'url(assets/intro.jpeg)',
              height: '500px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
            }}
          >
            <div className='row h-100 p-0 mx-0'>
              <div className='col text-center bg-light bg-opacity-10 text-dark border-dark my-auto'>
                <h2
                  className='mx-auto p-2'
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  }}
                >
                  Welcome to the Amazing Cookbook
                </h2>
                <h4
                  className='mx-auto-2 p-2'
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  }}
                >
                  Here you will be able to find some of <br /> the best recipes
                  in the World.
                </h4>
                <h4
                  className='mx-auto-1 p-2'
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  }}
                >
                  Enjoy!
                </h4>
              </div>
            </div>
          </div>
        </div>
        <h1
          className='text-center text-dark p-2 mr-2'
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            color: 'violet',
          }}
        >
          Recipes
        </h1>
        <h4
          className='text-center text-dark p-2 mr-2'
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Here you can find some of our most popular recipes.
        </h4>
        <div className='container'>
          <div className='row d-flex flex-wrap'>{fetchdata}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
