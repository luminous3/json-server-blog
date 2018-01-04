import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import renderHtml from 'react-render-html';
import { browserHistory } from 'react-router';
import {getBlogPost} from '../../services/blog-service';
import Comments from '../comments';
import './blog-post.scss';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      author: props.author,
      date: props.date,
      content: props.content,
      description: props.description,
      expanded: props.expanded
    };
  }

  componentDidMount = () => {
    if(this.props.params) {
      getBlogPost(this.props.params.id).then(post => {
        this.setState({
          id: post.id,
          title: post.title,
          author: post.author,
          date: post.publish_date,
          content: post.content,
          expanded: true
        })
      })
    }
  }

  render() {
    const {id, title, author, date, slug,
      content, description, expanded} = this.state;
    const titleClass = classnames({'title-focus': !expanded}, 'title');
    const containerClass = classnames({'expanded': expanded}, 'blog-post-container');
    return (
      <div>
        {expanded && <div className="back" onClick={browserHistory.goBack}>Back</div>}
        <div className={containerClass}>
          {!expanded && <Link to={`/posts/${id}`}><div className={titleClass}>{title}</div></Link>}
          {expanded && <div className={titleClass}>{title}</div>}
          {!expanded && <div className="description">{description}</div>}
          {expanded && <div className="content">{renderHtml(content)}</div>}
          <div className="footer">
            <div className="author">By {author} &middot; </div>
            <div className="date">{date}</div>
          </div>
          {expanded && <Comments id={id} />}
        </div>
      </div>
    );
  }
}
