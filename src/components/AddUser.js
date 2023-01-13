import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../authentication/useToken";
import axios from "axios";

function AddUser() {
  const [token, setToken] = useToken("");

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

    const { token1 } = response.data;
    setToken(token1);
    console.log(token);

    history.push("/login");
    window.location.reload();
  };

  return (
    <div className="row">
      <form className="col s12">
        <h1>Sign up</h1>

        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
              placeholder="Full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="validate"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              className="validate"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              type="text"
              className="validate"
            />
            <label htmlFor="age">Age</label>
          </div>
          <hr />
          <div>
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
              className="btn waves-effect waves-light"
            >
              Sign Up
              <i className="material-icons right">send</i>
            </button>
            <button
              onClick={() => {
                history.push("/login");
                window.location.reload();
              }}
              className="btn waves-effect waves-light"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
