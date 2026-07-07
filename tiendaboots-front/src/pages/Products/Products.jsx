import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";

import "./Products.css";

const PRODUCTS = [
  {
    id: 1,
    nombre: "Botas Timberland Earthkeepers para hombre",
    precio: "$389.999",
    descripcion: "Un mix entre la durabilidad de Timberland y la conciencia sustentable.",
    imagen: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=687&auto=format&fit=crop",
    stock: "En stock",
    stockClass: "success",
    stars: 4.5,
    envio: "Envíos sin cargo a todo el país",
    color: "Marrón",
  },
  {
    id: 2,
    nombre: "Botín de cuero para mujer",
    precio: "$289.999",
    descripcion: "Botín al tobillo confeccionado en cuero negro con acabado satinado y dos cremalleras metálicas laterales.",
    imagen: "https://images.unsplash.com/photo-1605732440685-d0654d81aa30?q=80&w=1470&auto=format&fit=crop",
    stock: "En stock",
    stockClass: "success",
    stars: 4,
    envio: "Envíos sin cargo a todo el país",
    color: "Negro",
  },
  {
    id: 3,
    nombre: "Botas impermeables Timberland Premium",
    precio: "$320.999",
    descripcion: "Diseñadas hace 40 años se mantienen como un ícono global hoy en día.",
    imagen: "https://images.unsplash.com/photo-1542838776-096d877b5aa2?w=600&auto=format&fit=crop&q=60",
    stock: "En stock",
    stockClass: "success",
    stars: 4.5,
    envio: "Envíos sin cargo a todo el país",
    color: "Marrón",
  },
  {
    id: 4,
    nombre: "Botas brogue con puntera de Barker Calder",
    precio: "$159.999",
    descripcion: "Botas elegantes con un extra.",
    imagen: "https://images.unsplash.com/photo-1638609348722-aa2a3a67db26?q=80&w=1345&auto=format&fit=crop",
    stock: "Sin stock",
    stockClass: "danger",
    stars: 4,
    envio: "Envíos sin cargo a todo el país",
    color: "Marrón",
  },
  {
    id: 5,
    nombre: "Botas Martens Rojo Cereza Liso",
    precio: "$220.999",
    descripcion: "Entrá en el modo rebelde y expresivo.",
    imagen: "https://plus.unsplash.com/premium_photo-1728158949987-efc83ed54df4?q=80&w=687&auto=format&fit=crop",
    stock: "En stock",
    stockClass: "success",
    stars: 4,
    envio: "Envíos sin cargo a todo el país",
    color: "Bordo",
  },
  {
    id: 6,
    nombre: "Cuero negro al tobillo",
    precio: "$159.999",
    descripcion: "Silueta clásica de inspiración militar con funcionalidad moderna.",
    imagen: "https://images.unsplash.com/photo-1613673720017-56e42d90fee4?w=600&auto=format&fit=crop&q=60",
    stock: "En stock",
    stockClass: "success",
    stars: 3.5,
    envio: "Envíos sin cargo a todo el país",
    color: "Negro",
  },
];

const FILTROS = ["Todas las botas", "Marrón", "Negro", "Bordo"];

export default function Products() {
  const [filtroActivo, setFiltroActivo] = useState("Todas las botas");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const productosFiltrados =
    filtroActivo === "Todas las botas"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.color === filtroActivo);

  return (
    <div className="container-fluid my-2">
      <div className="d-flex flex-column flex-md-row gy-4 align-items-center align-items-md-start">

        {/* Filtro Desktop */}
        <div className="filter-tab d-none d-md-block">
          <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
            <p className="filter-title">Filtrar por:</p>
            {FILTROS.map((filtro) => (
              <button
                key={filtro}
                className={`nav-link text-start${filtroActivo === filtro ? " active" : ""}`}
                onClick={() => setFiltroActivo(filtro)}
                type="button"
              >
                {filtro}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro Mobile */}
        <div className="d-flex d-md-none flex-row gap-4 align-items-center">
          <div className="filter-tab">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                onClick={() => setOpenDropdown((prev) => !prev)}
                aria-expanded={openDropdown}
              >
                Filtrar
              </button>

              <ul className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
                {FILTROS.map((filtro) => (
                  <li key={filtro}>
                    <button
                      className={`dropdown-item nav-link text-start${
                        filtroActivo === filtro ? " active" : ""
                      }`}
                      onClick={() => {
                        setFiltroActivo(filtro);
                        setOpenDropdown(false);
                      }}
                      type="button"
                    >
                      {filtro}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="flex-grow-1">
          <div className="row">
            {productosFiltrados.map((producto) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-4" key={producto.id}>
                <ProductCard
                  producto={producto}
                  onAmpliar={() => setProductoSeleccionado(producto)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductModal
        producto={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
      />
    </div>
  );
}