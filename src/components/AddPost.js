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
    <div>
      <form onSubmit={submitPost}>
        <div>
          <div>
            <input
              placeholder="Placeholder"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              type="text"
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <button type="subnmit" name="action">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
