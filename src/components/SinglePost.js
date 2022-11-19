import React from "react";
import { useState } from "react";
import SingleUser from "./SingleUser";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SinglePost({ item }) {
  const [user, setUser] = useState(null);

  const history = useHistory();

  const submitUser = async () => {
    let urlQuery = "http://localhost:8080/api/user?username=" + item.creator;

    const response = await axios.get(urlQuery);

    setUser(response.data);
    if (user) console.log(JSON.stringify(user.age, null, 2));
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <br />
            <span>{item.content}, </span>
            <b>
              <button
                onClick={() => {
                  localStorage.setItem("messageReceiver", item.creator);
                  history.push("/profile");
                  window.location.reload();
                }}
              >
                Created by {item.creator}{" "}
              </button>
            </b>
          </div>
          <div>
            <span>{item.timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
