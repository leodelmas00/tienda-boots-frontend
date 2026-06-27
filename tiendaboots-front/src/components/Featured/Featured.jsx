import "./Featured.css";

export default function Featured() {
  return (
    <>
      <div className="text-center my-5 section-header">
        <h2>Nuestros mejores productos!</h2>
      </div>

      <div className="container my-5">
        <div id="carouselExample" className="carousel slide mx-auto">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=687&auto=format&fit=crop"
                className="d-block"
                alt="Botas Timberland Earthkeepers para hombre"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bold">
                  Botas Timberland Earthkeepers para hombre
                </h5>
                <p>
                  Un mix entre la durabilidad de Timberland y la conciencia
                  sustentable.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1542838776-096d877b5aa2?w=600&auto=format&fit=crop&q=60"
                className="d-block"
                alt="Botas impermeables Timberland Premium"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bold">
                  Botas impermeables Timberland Premium
                </h5>
                <p>
                  Diseñadas hace 40 años se mantienen como un ícono global hoy
                  en día.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1728158949987-efc83ed54df4?q=80&w=687&auto=format&fit=crop"
                className="d-block"
                alt="Botas Martens Rojo Cereza Liso"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-bold">
                  Botas Martens Rojo Cereza Liso
                </h5>
                <p>Entrá en el modo rebelde y expresivo.</p>
              </div>
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}