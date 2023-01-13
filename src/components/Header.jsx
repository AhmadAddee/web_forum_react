import M from "materialize-css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    let dropdowns = document.querySelectorAll(".sidenav");
    M.Sidenav.init(dropdowns);
  }, []);

  return (
    <div className="top-nav">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            PostGram
          </a>

          <a
            href="/"
            data-target="mobile-demo"
            className="sidenav-trigger"
            onMouseEnter={(e) => {
              const inst = M.Sidenav.getInstance(e.target);
              inst && inst.open();
            }}
            onMouseLeave={(e) => {
              const inst = M.Sidenav.getInstance(e.target);
              inst && inst.close();
            }}
          >
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/users">My Profile</a>
            </li>
            <li>
              <a href="/myinbox">Messages</a>
            </li>
            <li>
              <a href="/addpost">Create post</a>
            </li>
            <li>
              <a href="/">Search profile</a>
            </li>
            <li>
              <a href="/chart">Charts</a>
            </li>
            <li>
              <a href="/whiteboard">White board</a>
            </li>
            <li>
              {localStorage.getItem("username") !== "" && (
                <a href="/logout">Log out</a>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/users">My Profile</a>
        </li>
        <li>
          <a href="/myinbox">Messages</a>
        </li>
        <li>
          <a href="/addpost">Create post</a>
        </li>
        <li>
          <a href="/">Search profile</a>
        </li>
        <li>
          <a href="/chart">Charts</a>
        </li>
        <li>
          <a href="/whiteboard">White board</a>
        </li>
        <li>
          {localStorage.getItem("username") !== "" && (
            <a href="/logout">Log out</a>
          )}
        </li>
      </ul>
    </div>
  );
}
export default Header;
