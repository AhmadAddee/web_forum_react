import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../authentication/useToken";
import SingleUser from "./SingleUser";
import SinglePost from "./SinglePost";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    age: 0,
    postList: [],
  });
  const [message, setMessage] = useState("");

  let url =
    "http://localhost:8080/api/user?username=" +
    localStorage.getItem("messageReceiver");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setUser);
  }, [localStorage.getItem("messageReceiver")]);

  const onSendClicked = async () => {
    let messUrl = "http://localhost:8080/api/message";
    if (message !== "") {
      const result = await axios.post(messUrl, {
        sender: localStorage.getItem("username"),
        receiver: localStorage.getItem("messageReceiver"),
        content: message,
      });

      console.log(result.data);
      window.location.reload();
    }
  };

  return (
    <div>
      <h4>{user.username}</h4>
      <div>Full name: {user.fullName}</div>
      <div>Age: {user.age}</div>
      <div>
        <p>Send a message</p>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
        />
        <button onClick={onSendClicked}>Send</button>
      </div>
      posts:
      {user.postList.map((post) => (
        <div>
          <div>
            <br />
            <span>{post.content}, </span>
          </div>
          <div>
            <span>{post.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
