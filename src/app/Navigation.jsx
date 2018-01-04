import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className='navbar navbar-expand-lg my-4'>
    <h1 className='navbar-brand mb-0'>Blog Post App</h1>
    <div className='collapse navbar-collapse'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to={`/home`} className='nav-link' activeClassName='active'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to={`/about`} className='nav-link' activeClassName='active'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to={`/posts`} className='nav-link' activeClassName='active'>Posts</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
