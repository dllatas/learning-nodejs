var React = require("react");
var ReactDOM = require("react-dom");

var data = [
  {id: 1, author: "Zingo Tawfique", text: "This is one comment"},
  {id: 2, author: "Yoni Amoiridou", text: "This is two comment"}
];

var HelloWorld = React.createClass({
    render: function() {
      return (
        <h1>Hello World !!</h1>
      );
    }
})

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("example")
)

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data} />
          <CommentForm />
        </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
          {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        YO! Ama commentForm
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById("content")
);
