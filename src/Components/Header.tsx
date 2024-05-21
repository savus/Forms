import "../css/header.css";

export function Header() {
  return (
    <header className="main-header container container-lg">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <a href="#">
              <div className="dropdown">
                <button>Dropdown Js</button>
                <div className="dropdown-menu"></div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
