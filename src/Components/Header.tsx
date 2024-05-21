import "../css/header.css";

export function Header() {
  return (
    <header className="main-header container container-lg">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="dropdown">
                <button className="dropdown-button btn">Dropdown Js</button>
                <div className="dropdown-menu"></div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
