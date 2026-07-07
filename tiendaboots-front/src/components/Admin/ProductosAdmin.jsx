import { useState } from 'react'
import AgregarProducto from './AgregarProducto'
import './ProductosAdmin.css'

const PRODUCTOS_INICIALES = [
  { id: 1, nombre: 'Botas Timberland Earthkeepers para hombre', precio: '$389.999', descripcion: 'Un mix entre la durabilidad de Timberland y la conciencia sustentable.', imagen: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=687&auto=format&fit=crop', stock: 'En stock', color: 'Marrón' },
  { id: 2, nombre: 'Botín de cuero para mujer', precio: '$289.999', descripcion: 'Botín al tobillo confeccionado en cuero negro con acabado satinado y dos cremalleras metálicas laterales.', imagen: 'https://images.unsplash.com/photo-1605732440685-d0654d81aa30?q=80&w=1470&auto=format&fit=crop', stock: 'En stock', color: 'Negro' },
  { id: 3, nombre: 'Botas impermeables Timberland Premium', precio: '$320.999', descripcion: 'Diseñadas hace 40 años se mantienen como un ícono global hoy en día.', imagen: 'https://images.unsplash.com/photo-1542838776-096d877b5aa2?w=600&auto=format&fit=crop&q=60', stock: 'En stock', color: 'Marrón' },
  { id: 4, nombre: 'Botas brogue con puntera de Barker Calder', precio: '$159.999', descripcion: 'Botas elegantes con un extra.', imagen: 'https://images.unsplash.com/photo-1638609348722-aa2a3a67db26?q=80&w=1345&auto=format&fit=crop', stock: 'Sin stock', color: 'Marrón' },
  { id: 5, nombre: 'Botas Martens Rojo Cereza Liso', precio: '$220.999', descripcion: 'Entrá en el modo rebelde y expresivo.', imagen: 'https://plus.unsplash.com/premium_photo-1728158949987-efc83ed54df4?q=80&w=687&auto=format&fit=crop', stock: 'En stock', color: 'Bordo' },
  { id: 6, nombre: 'Cuero negro al tobillo', precio: '$159.999', descripcion: 'Silueta clásica de inspiración militar con funcionalidad moderna.', imagen: 'https://images.unsplash.com/photo-1613673720017-56e42d90fee4?w=600&auto=format&fit=crop&q=60', stock: 'En stock', color: 'Negro' },
]

export default function ProductosAdmin() {
  const [productos, setProductos] = useState(PRODUCTOS_INICIALES)
  const [showModal, setShowModal] = useState(false)
  const [productoEditando, setProductoEditando] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = (mensaje, tipo = 'success') => {
    setToast({ mensaje, tipo })
    setTimeout(() => setToast(null), 2500)
  }

  const handleAgregar = (nuevoProducto) => {
    setProductos((prev) => [
      ...prev,
      { ...nuevoProducto, id: Date.now() },
    ])
    setShowModal(false)
    showToast('Producto agregado correctamente')
  }

  const handleEditar = (producto) => {
    setProductoEditando(producto)
    setShowModal(true)
  }

  const handleGuardarEdicion = (productoEditado) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === productoEditado.id ? productoEditado : p))
    )
    setProductoEditando(null)
    setShowModal(false)
    showToast('Producto editado correctamente')
  }

  const handleEliminar = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id))
    showToast('Producto eliminado')
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setProductoEditando(null)
  }

  return (
    <div className="productos-admin">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4">
        <h2 className="section-title">Gestion de Productos</h2>
        <button className="btn btn-add" onClick={() => { setProductoEditando(null); setShowModal(true) }}>
          <i className="bi bi-plus-lg me-1"></i> <span className="d-none d-sm-inline">Agregar Producto</span>
        </button>
      </div>

      <div className="table-responsive d-none d-md-block">
        <table className="table align-middle table-productos">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Img</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Color</th>
              <th>Stock</th>
              <th style={{ width: '160px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <img src={producto.imagen} alt={producto.nombre} className="table-thumb" />
                </td>
                <td className="fw-semibold">{producto.nombre}</td>
                <td className="text-muted td-desc">{producto.descripcion}</td>
                <td className="fw-bold">{producto.precio}</td>
                <td>{producto.color}</td>
                <td>
                  <span className={`badge ${producto.stock === 'En stock' ? 'bg-success' : 'bg-danger'}`}>
                    {producto.stock}
                  </span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleEditar(producto)}>
                      <i className="bi bi-pencil"></i> <span className="d-none d-md-inline">Editar</span>
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleEliminar(producto.id)}>
                      <i className="bi bi-trash"></i> <span className="d-none d-md-inline">Eliminar</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productos-cards d-md-none">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <div className="producto-card-img">
              <img src={producto.imagen} alt={producto.nombre} />
              <span className={`badge ${producto.stock === 'En stock' ? 'bg-success' : 'bg-danger'}`}>
                {producto.stock}
              </span>
            </div>
            <div className="producto-card-body">
              <h5 className="producto-card-name">{producto.nombre}</h5>
              <p className="producto-card-desc">{producto.descripcion}</p>
              <div className="producto-card-details">
                <span className="producto-card-price">{producto.precio}</span>
                <span className="producto-card-color">{producto.color}</span>
              </div>
              <div className="producto-card-actions">
                <button className="btn btn-sm btn-outline-secondary flex-grow-1" onClick={() => handleEditar(producto)}>
                  <i className="bi bi-pencil me-1"></i> Editar
                </button>
                <button className="btn btn-sm btn-outline-danger flex-grow-1" onClick={() => handleEliminar(producto.id)}>
                  <i className="bi bi-trash me-1"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AgregarProducto
        key={showModal ? (productoEditando?.id ?? 'new') : null}
        show={showModal}
        onClose={handleCloseModal}
        onGuardar={productoEditando ? handleGuardarEdicion : handleAgregar}
        producto={productoEditando}
      />

      {toast && (
        <div className={`toast-admin toast-admin-${toast.tipo}`}>
          <i className={`bi ${toast.tipo === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill'} me-2`}></i>
          {toast.mensaje}
        </div>
      )}
    </div>
  )
}
