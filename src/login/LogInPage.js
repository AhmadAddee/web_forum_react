import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../authentication/useToken";

function LogInPage() {
  const [token, setToken] = useToken("");

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  localStorage.setItem("messageReceiver", "");
  const history = useHistory();

  const onLogInClicked = async () => {
    const response = await axios.post("http://localhost:8080/user/login", {
      username: username,
      password: password,
    });

    setToken(response.data.username);
    console.log("from login page, response.data.username and token");
    console.log(response.data.username);
    console.log(token);

    if (
      response.data.username === username &&
      response.data.password === password
    ) {
      history.push("/");
      setErrorMessage("Successfully logged in!");
      window.location.reload();
    } else {
      setErrorMessage("Something went bananas, try again!");
    }
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <input
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="@something.com"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <hr />
      <button disabled={!username || !password} onClick={onLogInClicked}>
        Log In
      </button>
      <button>Forgot your password?</button>
      <button
        onClick={() => {
          history.push("/signup");
          window.location.reload();
        }}
      >
        Don't have an acount? Sign Up
      </button>
    </div>
  );
}

export default LogInPage;
