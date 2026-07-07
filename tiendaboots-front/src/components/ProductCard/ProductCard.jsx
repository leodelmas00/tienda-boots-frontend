import "./ProductCard.css";

export default function ProductCard({ producto, onAmpliar }) {
  const { nombre, descripcion, imagen } = producto;

  return (
    <div className="card h-100">
      <img
        src={imagen}
        className="card-img-top img-fluid rounded card-img"
        alt={nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <button
          className="btn btn-ampliar"
          onClick={onAmpliar}
        >
          Ampliar
        </button>
        <p className="card-text mt-2">
          <small className="text-body-secondary">Editado hace 3 minutos</small>
        </p>
      </div>
    </div>
  );
}