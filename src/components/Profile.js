import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../authentication/useToken";
import SingleUser from "./SingleUser";
import SinglePost from "./SinglePost";

function Profile() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    age: 0,
    postList: [],
  });
  const [message, setMessage] = useState("");

  let url =
    "http://localhost:8080/user/get-user?username=" +
    localStorage.getItem("messageReceiver");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setUser);
  }, [localStorage.getItem("messageReceiver")]);

  const onSendClicked = async () => {
    let messUrl = "http://localhost:8080/message/send";
    if (message !== "") {
      const result = await axios.post(messUrl, {
        sender: localStorage.getItem("username"),
        receiver: localStorage.getItem("messageReceiver"),
        content: message,
      });
      localStorage.setItem("messageReceiver", "");
      history.push("/");
      window.location.reload();
    }
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <h4>{user.username}</h4>
          <div>Full name: {user.fullName}</div>
          <div>Age: {user.age}</div>
          <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
              className="materialize-textarea"
            />
            <label>Send a message</label>
            <button
              class="btn waves-effect waves-light"
              onClick={onSendClicked}
            >
              Send
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
      <b>posts:</b>
      {user.postList.map((post) => (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <div className="chip">
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
                    alt="Contact Person"
                  />
                  {post.creator}
                </div>

                <br />
                <span className="card-title">{post.content}, </span>
                <div class="card-action">
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
