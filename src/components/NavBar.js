import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand text-dark' to={'/'}>
        COOKBOOK-CMS
      </Link>
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
        <ul className='navbar-nav nav-justified'>
          <li className='nav-item active'>
            <Link className='nav-link text-dark' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='#'>
              About Us
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link className='nav-link text-dark' to='/'>
              Recipes
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='#'>
              Contact
            </Link>
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
  );
};

export default navbar;
