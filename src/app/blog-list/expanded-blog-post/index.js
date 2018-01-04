import React from 'react';
import classnames from 'classnames';
import renderHtml from 'react-render-html';
import './blog-post.scss';

export default class ExpandedBlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.props.onTitleClick(this.props.id);
  }

  render() {
    const {id, title, author, date, slug,
      content, description, expanded} = this.props;
    const titleClass = classnames({'title-focus': !expanded}, 'title');

    return (
     <div className="blog-post-container">
        <div className={titleClass}
          onClick={!expanded && this.handleOnClick}>
          {title}</div>
        <div className="description">{!expanded && description}</div>
        {expanded && <div className="content">{renderHtml(content)}</div>}
        <div className="footer">
          <div className="date">{date} &middot;</div>
          <div className="author">By {author}</div>
        </div>
      </div>
    );
  }
}
