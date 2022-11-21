import React, { Component } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddPost() {
  const [content, setContent] = useState("");
  const history = useHistory();

  const submitPost = (e) => {
    e.preventDefault();

    let creator = localStorage.getItem("username");
    let post = {
      creator: creator,
      content: content,
    };
    fetch("http://localhost:8080/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((response) => response.json());

    history.push("/");
    window.location.reload();
  };

  return (
    <div className="row">
      <form class="col s12" onSubmit={submitPost}>
        <h4>Create Post</h4>
        <div className="row">
          <div className="input-field col s6">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              placeholder="Content..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="content">Content</label>
          </div>
        </div>
        <div>
          <button
            className="btn waves-effect waves-light"
            type="subnmit"
            name="action"
          >
            <i className="material-icons right">send</i>
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
