import React from 'react';
import BlogPost from './blog-post';
import {getBlogPosts} from '../services/blog-service';
import sortJsonArray from 'sort-json-array';
import './blog-list.scss';

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    getBlogPosts().then(res => {
      sortJsonArray(res, 'publish_date', 'des');
      this.setState({posts: res});
    })
  }

  sort(posts) {

  }

  renderBlogPosts = (posts) => {
    const blogPosts = posts.map((post) => {
      return <BlogPost title={post.title}
        key={post.id}
        author={post.author}
        date={post.publish_date}
        content={post.content}
        description={post.description}
        slug={post.slug} />
    });

    return blogPosts;
  }

  render() {
    const {posts} = this.state;
    return (
     <div className="blog-list-container">
        {posts && this.renderBlogPosts(posts)}
      </div>
    );
  }
}
