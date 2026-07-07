import './Sidebar.css'

export default function Sidebar({ seccionActiva, onCambiarSeccion }) {
  const menuItems = [
    { id: 'pedidos', icon: 'bi-receipt', label: 'Pedidos' },
    { id: 'productos', icon: 'bi-box-seam', label: 'Productos' },
  ]

  return (
    <aside className="admin-sidebar d-none d-md-flex flex-column">
      <div className="sidebar-brand">
        <i className="bi bi-boot"></i>
        <span>TiendaBoots</span>
      </div>
      <nav className="sidebar-nav flex-column">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-link ${seccionActiva === item.id ? 'active' : ''}`}
            onClick={() => onCambiarSeccion(item.id)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <a href="/" className="sidebar-link">
          <i className="bi bi-box-arrow-left"></i>
          <span>Volver a la tienda</span>
        </a>
      </div>
    </aside>
  )
}
