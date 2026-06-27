import "./Contact.css";

export default function Contact() {
  return (
    <main className="container flex-grow-1 d-flex justify-content-center align-items-center py-5">
      <div className="contact-card shadow">

        <h1 className="text-center mb-4">Contacto</h1>

        <form>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Enviar
          </button>

        </form>
      </div>
    </main>
  );
}