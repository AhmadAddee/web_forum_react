import { useState } from "react";
import { useHistory } from "react-router-dom";

function LogInPage() {
  //const [token, setToken] = useToken("");

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [user, setUser] = useState(null);
  //const [jwt, setJwt] = useLocalState("", "jwt");

  localStorage.setItem("messageReceiver", "");
  const history = useHistory();

  const onLogInClicked = () => {
    const reqBody = {
      username: username,
      password: password,
    };
    console.log(reqBody);

    //const response = await axios.post
    fetch("http://localhost:8080/user/loign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="row">
      <form className="col s12">
        <h1>Log In</h1>
        {errorMessage && <div>{errorMessage}</div>}
        <div className="row">
          <div className="input-field col s6">
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@your-email.com"
            />
          </div>
          <div className="input-field col s6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <hr />
          <div className="row center-align">
            <button
              className="btn waves-effect waves-light"
              disabled={username && password ? false : true}
              onClick={onLogInClicked}
            >
              Log In
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="row center-align">
            <button className="btn waves-effect waves-light" disabled={true}>
              Forgot your password? <i className="material-icons right">send</i>{" "}
            </button>
          </div>
          <div className="row center-align">
            <button
              onClick={() => {
                history.push("/signup");
                window.location.reload();
              }}
              className="btn waves-effect waves-light"
            >
              <i className="material-icons right">send</i>
              Don't have an acount? Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInPage;
