import { useState } from 'react'
import { Offcanvas } from 'bootstrap'
import Sidebar from '../../components/Admin/Sidebar'
import PedidosAdmin from '../../components/Admin/PedidosAdmin'
import ProductosAdmin from '../../components/Admin/ProductosAdmin'
import './Admin.css'

export default function Admin() {
  const [seccionActiva, setSeccionActiva] = useState('pedidos')

  const closeOffcanvas = () => {
    const el = document.getElementById('adminOffcanvas')
    if (el) {
      const instance = Offcanvas.getInstance(el) || new Offcanvas(el)
      instance.hide()
    }
  }

  return (
    <div className="admin-layout">
      <Sidebar seccionActiva={seccionActiva} onCambiarSeccion={setSeccionActiva} />

      <div className="admin-content">
        <header className="admin-header d-flex d-md-none align-items-center justify-content-between px-3 py-2 bg-white border-bottom">
          <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#adminOffcanvas">
            <i className="bi bi-list fs-4"></i>
          </button>
          <span className="fw-bold">Panel Admin</span>
          <span></span>
        </header>

        <div className="offcanvas offcanvas-start d-md-none" tabIndex="-1" id="adminOffcanvas">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body p-0">
            <Sidebar seccionActiva={seccionActiva} onCambiarSeccion={(s) => {
              setSeccionActiva(s)
              closeOffcanvas()
            }} />
          </div>
        </div>

        <main className="admin-main">
          {seccionActiva === 'pedidos' && <PedidosAdmin />}
          {seccionActiva === 'productos' && <ProductosAdmin />}
        </main>
      </div>
    </div>
  )
}
