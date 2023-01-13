import React, { Component } from "react";
import SingleUser from "./SingleUser";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        fullName: "",
        postList: [],
        age: 0,
      },
      username: localStorage.getItem("username"),
      url: "http://localhost:8080/user/get-user?username=" + this.username,
    };
  }

  componentDidMount() {
    var usernamee = localStorage.getItem("username");
    var ruli = "http://localhost:8080/user/get-user?username=" + usernamee;
    console.log(ruli);
    fetch(ruli)
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }));
  }

  render() {
    return (
      <div>
        <div>
          <SingleUser item={this.state.user} />
        </div>
      </div>
    );
  }
}
