import React from 'react';
import './blog-post.scss';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, title, author, date, slug, content, description} = this.props;
    return (
     <div className="blog-post-container">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="footer">
          <div className="date">{date} &middot;</div>
          <div className="author">By {author}</div>
        </div>
      </div>
    );
  }
}
