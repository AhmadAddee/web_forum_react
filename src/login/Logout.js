import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../authentication/useToken";

function LogOutPage() {
  const [token, setToken] = useToken("");

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onLogInClicked = async () => {
    setToken("");
    console.log(token);
    localStorage.setItem("messageReceiver", "");
    history.push("/login");
    setErrorMessage("");
    window.location.reload();
  };

  return (
    <div className="content-container">
      <h1>Sure you want to log out?</h1>
      {errorMessage && <div>{errorMessage}</div>}

      <hr />
      <button onClick={onLogInClicked} className="btn waves-effect waves-light">
        Yes!
      </button>
    </div>
  );
}

export default LogOutPage;
