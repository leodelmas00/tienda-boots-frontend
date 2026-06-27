import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-section vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
      <h1 className="display-2">Bienvenido a TiendaBoots</h1>
      <p className="lead fs-4 mt-2">
        Botas diseñadas para acompañarte en cada paso.
      </p>
    </div>
  );
}