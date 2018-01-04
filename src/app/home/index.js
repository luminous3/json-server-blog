import React from 'react';
import BlogList from '../blog-list';
import BlogService from '../services/blog-service';
import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="main-container">
        <h1 className="welcome">Welcome!</h1>
        <BlogList />
      </div>
    );
  }
}
