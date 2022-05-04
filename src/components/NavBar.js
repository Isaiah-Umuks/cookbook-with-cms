import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand text-dark' alt='tes' href='/'>
        COOKBOOK-CMS
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
        <ul className='navbar-nav nav-justified'>
          <li className='nav-item active'>
            <a className='nav-link text-dark' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-dark' href='#'>
              About Us
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link text-dark' href='/'>
              Recipes
            </a>
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
  );
};

export default navbar;
