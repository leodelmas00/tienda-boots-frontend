import { useState } from 'react'
import './AgregarProducto.css'

const EMPTY_FORM = {
  nombre: '',
  descripcion: '',
  precio: '',
  color: 'Marrón',
  imagen: '',
  stock: 'En stock',
}

export default function AgregarProducto({ show, onClose, onGuardar, producto }) {
  const [form, setForm] = useState(producto ? { ...EMPTY_FORM, ...producto } : EMPTY_FORM)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.precio) return
    onGuardar(form)
    setForm(EMPTY_FORM)
  }

  if (!show) return null

  const esEdicion = !!producto

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div className="modal-custom" onClick={(e) => e.stopPropagation()}>
        <div className="modal-custom-header">
          <h5>{esEdicion ? 'Editar Producto' : 'Agregar Producto'}</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <form onSubmit={handleSubmit} className="modal-custom-body">
          <div className="mb-3">
            <label className="form-label">Nombre del producto</label>
            <input type="text" className="form-control" name="nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <textarea className="form-control" name="descripcion" rows="3" value={form.descripcion} onChange={handleChange} required></textarea>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Precio</label>
              <input type="text" className="form-control" name="precio" value={form.precio} onChange={handleChange} required placeholder="$0" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Color</label>
              <select className="form-select" name="color" value={form.color} onChange={handleChange}>
                <option value="Marrón">Marrón</option>
                <option value="Negro">Negro</option>
                <option value="Bordo">Bordo</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">URL de imagen</label>
            <input type="text" className="form-control" name="imagen" value={form.imagen} onChange={handleChange} placeholder="https://..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Stock</label>
            <select className="form-select" name="stock" value={form.stock} onChange={handleChange}>
              <option value="En stock">En stock</option>
              <option value="Sin stock">Sin stock</option>
            </select>
          </div>
          <div className="d-flex gap-2 mt-4">
            <button type="submit" className="btn btn-success flex-grow-1">
              <i className="bi bi-check-lg me-1"></i> {esEdicion ? 'Guardar Cambios' : 'Guardar'}
            </button>
            <button type="button" className="btn btn-outline-secondary flex-grow-1" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
