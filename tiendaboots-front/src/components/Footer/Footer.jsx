import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-white text-center py-3 mt-auto border-top">
      <div className="container">
        <span className="text-muted">
          © 2026 TiendaOnline | Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}