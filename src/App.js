import User from "./components/User";
import Post from "./components/Post";
import Routes from "./Routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <a href="/">Posts</a>
        </div>
        <div>
          <a href="/users">Users</a>
        </div>
        <div>
          <a href="/myinbox">Messages</a>
        </div>
        <div>
          <a href="/addpost">Create post</a>
        </div>
        <div>
          <a href="/">Search profile</a>
        </div>
        <div>
          {localStorage.getItem("username") !== "" && (
            <a href="/logout">Log out</a>
          )}
        </div>
      </nav>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
