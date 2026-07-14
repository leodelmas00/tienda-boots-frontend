import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import genericPP from "../../assets/genericPP.webp";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  async function handleUpdateProfile() {
    navigate("/UpdateProfile");
  }
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom px-5 shadow">
      <div className="container-fluid">

        <Link to="/Home" className="navbar-brand">
          TiendaBoots
        </Link>

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
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Productos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>

            <li className="nav-item ms-3 profile-menu">
              <img
                  src={
                      user?.foto_perfil
                          ? `http://localhost:3000/${user.foto_perfil}`
                          : genericPP
                  }
                  alt="Perfil"
                  className="profile-picture"
                  onClick={() => setMenuOpen(!menuOpen)}
              />

              {menuOpen && (
                <div className="profile-dropdown shadow">
                  <button className="profile-dropdown-item" onClick={handleUpdateProfile}>
                    Actualizar perfil
                  </button>

                  <button className="profile-dropdown-item" onClick={handleLogout} >
                      Cerrar sesión
                  </button>
                </div>
              )}
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}