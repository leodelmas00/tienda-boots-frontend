import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import "./ProductModal.css";

function StarRating({ stars }) {
  return (
    <div className="mb-2">
      {[1, 2, 3, 4, 5].map((i) => {
        let icon = "bi-star";
        if (stars >= i) icon = "bi-star-fill";
        else if (stars >= i - 0.5) icon = "bi-star-half";
        return <i key={i} className={`bi ${icon} text-warning`} />;
      })}
      <span className="ms-2 text-muted">{stars}/5</span>
    </div>
  );
}

export default function ProductModal({ producto, onClose }) {
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);
  const [alertaVisible, setAlertaVisible] = useState(false);

  // Inicializar instancia Bootstrap Modal una sola vez
  useEffect(() => {
    bsModalRef.current = new Modal(modalRef.current, { backdrop: true });

    const el = modalRef.current;
    const handleHidden = () => {
      onClose();
      setAlertaVisible(false);
      if (document.activeElement) document.activeElement.blur();
    };
    el.addEventListener("hidden.bs.modal", handleHidden);
    return () => el.removeEventListener("hidden.bs.modal", handleHidden);
  }, []);

  // Abrir/cerrar según si hay producto seleccionado
  useEffect(() => {
    if (!bsModalRef.current) return;
    if (producto) {
      setAlertaVisible(false);
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [producto]);

  return (
    <div className="modal fade" id="productoModal" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{producto?.nombre}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>

          <div className="modal-body">
            {producto && (
              <>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid rounded shadow mx-auto d-block mb-3 modal-img"
                />

                <h3>{producto.precio}</h3>
                <p>{producto.descripcion}</p>

                <StarRating stars={producto.stars} />

                <div className="mb-3">
                  <span className={`badge bg-${producto.stockClass}`}>
                    {producto.stock}
                  </span>
                </div>

                <p className="fw-semibold">
                  <i className="bi bi-truck me-1" />
                  {producto.envio}
                </p>

                {alertaVisible && (
                  <div className="alert alert-success alert-dismissible fade show mt-3">
                    <strong>¡Agregaste el producto al carrito!</strong>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setAlertaVisible(false)}
                    />
                  </div>
                )}

                <div className="d-flex gap-2 mt-4">
                  <button
                    className="btn btn-success"
                    onClick={() => setAlertaVisible(true)}
                  >
                    <i className="bi bi-cart-plus me-1" />
                    Agregar al carrito
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}