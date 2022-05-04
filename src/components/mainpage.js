import React from 'react';
import { useState, useEffect } from 'react';
import '../index.css';
import Recipe from './recipe';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';
import { getRecipes, getAllData } from '../API/data';
import Footer from './footer';

const article = (data) => {
  // console.log(data.filter(data => data.fields.name === 'Quinoa and Eggplant Stuffed Peppers'));
  // console.log(data);
  const result = data;
  return result.map((iteration) => {
    return (
      <div className='col'>
        <div className='card w-100'>
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
          Read me
        </Link>
      </div>
    );
  });
};
const MainPage = () => {
  const [fetchdata, setFetchdata] = useState();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      getRecipes().then((jsonobj) => setFetchdata(article(jsonobj)));
    })();
  }, []);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand text-dark' alt='tes' href='#'>
          The Recipe Book
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='index.html'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-dark'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Recipes
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Spain
                </a>
                <a className='dropdown-item' href='#'>
                  India
                </a>
                <a className='dropdown-item' href='#'>
                  Africa
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href='#'>
                Contact
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-dark my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
      <main className='m-0 jumbotron'>
        <div className='topper container'>
          <div
            style={{
              backgroundImage: 'url(assets/intro.jpeg)',
              height: '700px',
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
                  className='mx-auto p-2'
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  }}
                >
                  Here you will be able to find some of the best recipes in the
                  World.
                </h4>
                <h4
                  className='mx-auto p-2'
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
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
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
          <div className='row'>{fetchdata}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
