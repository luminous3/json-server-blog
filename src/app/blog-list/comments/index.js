import React from 'react';
import {getComments, postComment} from '../../services/blog-service';
import './comments.scss';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    getComments(this.props.id).then(res => {
      this.setState({
        comments: res
      })
    })
  }

  handleInputChange = (e) => {
    this.setState({
      commentValue: e.target.value
    })
  }

  formatDate = (date) => {
      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 101).toString().substring(1);
      var day = (date.getDate() + 100).toString().substring(1);
      return year + "-" + month + "-" + day;
  }

  handleSubmit = () => {
    const {comments} = this.state;
    const lastId = comments.length === 0 ? 1 : comments[comments.length - 1].id + 1;

    const comment = {
      postId: this.props.id,
      parent_id: null,
      user: "Alex",
      date: this.formatDate(new Date()),
      content: this.state.commentValue
    };

    postComment(this.props.id, comment).then(res => {
      const newComments = comments.slice();
      newComments.push(res);
      this.setState({
        comments: newComments
      });
    })
  }

  render() {
    const {comments, commentValue} = this.state;

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
          <input
            onChange={this.handleInputChange}
            value={commentValue}
            placeholder="Add comment" />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
