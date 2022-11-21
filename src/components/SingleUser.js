import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SinglePost from "./SinglePost";

function SingleUser({ item }) {
  const [posts, setPosts] = useState([]);

  let url =
    "http://localhost:8080/post/get-posts?creator=" +
    localStorage.getItem("username");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [posts]);

  //if (posts.length !== 0) console.log(posts.length);
  return (
    <div>
      <h4>{item.username}</h4>
      <div>Full name: {item.fullName}</div>
      <div>Age: {item.age}</div>
      <div>
        posts:
        {posts.map((post) => (
          <span>
            <SinglePost key={post.id} item={post} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default SingleUser;
