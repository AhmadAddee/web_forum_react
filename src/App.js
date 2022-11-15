import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to google
        </a>
      </header>
    </div>
  );
}

export default App;
