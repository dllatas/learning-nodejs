var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var redis = require("redis"),
  client = redis.createClient();

/*var data = [
  {id: 1, author: "Zingo Tawfique", text: "This is one comment"},
  {id: 2, author: "Yoni Amoiridou", text: "This is two comment"}
];*/

var data = {}

data.retrieve = function(key) {
    client.get(key, function(err, reply) {
        return JSON.parse(reply);
    });
}

var input = data.retrieve("REGION");

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
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log("success");
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    console.log("getInitialState");
    return {data: []};
  },
  componentDidMount: function() {
    console.log("MOunt");
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  render: function() {
    return (
      <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
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
  // Fetch data from server
  // <CommentBox data={data}/>,
  <CommentBox url={input} pollInterval={2000}/>,
  document.getElementById("content")
);
