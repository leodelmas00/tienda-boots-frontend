import './PedidosAdmin.css'

const PEDIDOS = [
  { id: 1, cliente: 'Juan Perez', producto: 'Botas Timberland Earthkeepers', cantidad: 1, total: '$389.999', estado: 'Completado', fecha: '2026-07-01' },
  { id: 2, cliente: 'Maria Lopez', producto: 'Botin de cuero para mujer', cantidad: 2, total: '$579.998', estado: 'Pendiente', fecha: '2026-07-02' },
  { id: 3, cliente: 'Carlos Garcia', producto: 'Botas Martens Rojo Cereza', cantidad: 1, total: '$220.999', estado: 'Completado', fecha: '2026-07-03' },
  { id: 4, cliente: 'Ana Martinez', producto: 'Botas impermeables Premium', cantidad: 1, total: '$320.999', estado: 'Cancelado', fecha: '2026-07-03' },
  { id: 5, cliente: 'Pedro Sanchez', producto: 'Cuero negro al tobillo', cantidad: 3, total: '$479.997', estado: 'Pendiente', fecha: '2026-07-04' },
]

function badgeClass(estado) {
  if (estado === 'Completado') return 'badge bg-success'
  if (estado === 'Pendiente') return 'badge bg-warning text-dark'
  return 'badge bg-danger'
}

export default function PedidosAdmin() {
  return (
    <div className="pedidos-admin">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4">
        <h2 className="section-title">Pedidos Recientes</h2>
        <span className="text-muted">{PEDIDOS.length} pedidos</span>
      </div>

      <div className="table-responsive d-none d-md-block">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {PEDIDOS.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td className="fw-semibold">{pedido.cliente}</td>
                <td>{pedido.producto}</td>
                <td>{pedido.cantidad}</td>
                <td className="fw-semibold">{pedido.total}</td>
                <td>
                  <span className={badgeClass(pedido.estado)}>{pedido.estado}</span>
                </td>
                <td>{pedido.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pedidos-cards d-md-none">
        {PEDIDOS.map((pedido) => (
          <div key={pedido.id} className="pedido-card">
            <div className="pedido-card-header">
              <span className="pedido-card-id">#{pedido.id}</span>
              <span className={badgeClass(pedido.estado)}>{pedido.estado}</span>
            </div>
            <div className="pedido-card-body">
              <div className="pedido-card-row">
                <span className="pedido-card-label">Cliente</span>
                <span className="fw-semibold">{pedido.cliente}</span>
              </div>
              <div className="pedido-card-row">
                <span className="pedido-card-label">Producto</span>
                <span>{pedido.producto}</span>
              </div>
              <div className="pedido-card-row">
                <span className="pedido-card-label">Cantidad</span>
                <span>{pedido.cantidad}</span>
              </div>
              <div className="pedido-card-row">
                <span className="pedido-card-label">Total</span>
                <span className="fw-bold">{pedido.total}</span>
              </div>
              <div className="pedido-card-row">
                <span className="pedido-card-label">Fecha</span>
                <span>{pedido.fecha}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
