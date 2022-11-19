import React, { Component } from "react";
import SinglePost from "./SinglePost";
import AddPost from "./AddPost";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    /* <div><AddPost /></div> */
    return (
      <div>
        <h4>Posts</h4>
        {this.state.posts.map((item) => (
          <div>
            <SinglePost key={item.id} item={item} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
