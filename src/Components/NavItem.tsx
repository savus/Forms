export function Navitem() {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        <div className="dropdown" data-dropdown>
          <button className="dropdown-button btn" data-dropdown-button>
            Dropdown Js
          </button>
          <div className="dropdown-menu" data-dropdown-menu>
            <div className="menu-link">Login Modal Js</div>
          </div>
        </div>
      </a>
    </li>
  );
}
