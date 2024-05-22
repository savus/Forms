import "../css/header.css";

export function Header() {
  return (
    <header className="main-header container container-lg">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="dropdown active" data-dropdown>
                <button className="dropdown-button btn" data-dropdown-button>
                  Dropdown Js
                </button>
                <div className="dropdown-menu" data-dropdown-menu>
                  <div className="menu-link">Login Modal Js</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
