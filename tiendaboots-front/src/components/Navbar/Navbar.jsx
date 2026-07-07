import { Link } from 'react-router-dom'
import { Collapse } from 'bootstrap'
import './Navbar.css'

export default function Navbar() {
  const handleNavClick = () => {
    const el = document.getElementById('navbarContenido')
    const instance = Collapse.getInstance(el) || new Collapse(el, { toggle: false })
    instance.hide()
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom px-5 shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">TiendaBoots</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
          aria-controls="navbarContenido"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="/products" className="nav-link" onClick={handleNavClick}>Productos</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contacto</Link>
            </li>
            <li className="nav-item">
                <Link to="/Admin" className="nav-link" onClick={handleNavClick}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};