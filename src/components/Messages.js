import React, { Component } from "react";
import SingleMessage from "./SingleMessage";
import AddPost from "./AddPost";
export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "http://localhost:8080/api/messages?username=" +
        localStorage.getItem("username"),
      messages: [],
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => this.setState({ messages: data }));
  }

  render() {
    return (
      <div>
        <h4>My inbox</h4>
        {this.state.messages.map((item) => (
          <div>
            <SingleMessage key={item.id} item={item} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
