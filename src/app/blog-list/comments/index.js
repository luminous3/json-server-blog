import React from 'react';
import {getComments} from '../../services/blog-service';
import './comments.scss';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount = () => {
    getComments(this.props.id).then(res => {
      this.setState({
        comments: res
      })
    })
  }

  render() {
    const {comments} = this.state;
    return (
     <div className="comments-container">
        <div className="comments-title">{comments.length} Comments</div>
        {comments && comments.map(comment => {
          return <div className="comment-container" key={comment.id}>
            <div className="comment-header">
              <div>{comment.user} &middot; {comment.date}</div>
            </div>
            <div>{comment.content}</div>
          </div>
        })}
        <div className="add-comment">
          <input placeholder="Add comment" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
