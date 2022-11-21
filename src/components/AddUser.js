import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../authentication/useToken";
import axios from "axios";

function AddUser() {
  const [token, setToken] = useToken();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState(0);

  const history = useHistory();

  const submitUser = async () => {
    //e.preventDefault();

    const response = await axios.post("http://localhost:8080/user/add", {
      username: username,
      fullName: fullName,
      password: password,
      age: age,
    });

    const { token } = response.data;
    setToken(token);

    history.push("/login");
    window.location.reload();
  };

  return (
    <div className="content-container">
      <h1>Sign up</h1>

      <div>
        <div>
          <input
            placeholder="Placeholder"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input
            placeholder="Placeholder"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
          />
          <label htmlFor="fullName">Full Name</label>
        </div>
        <div>
          <input
            placeholder="Placeholder"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            placeholder="Placeholder"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="text"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div>
          <input
            placeholder="Placeholder"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            type="text"
          />
          <label htmlFor="age">Age</label>
        </div>
        <div>
          <hr />
          <button
            type="subnmit"
            name="action"
            disabled={
              !username ||
              !password ||
              !fullName ||
              !age ||
              password !== confirmPassword
            }
            onClick={submitUser}
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              history.push("/login");
              window.location.reload();
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
