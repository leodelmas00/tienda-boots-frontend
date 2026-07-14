import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        dni: "",
        direccion: "",
        telefono: "",
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setError("");

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al registrar usuario");
            }

            alert("Usuario registrado correctamente");

            navigate("/Login");

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <section>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="w-50 card p-5 bg-white d-flex flex-column gap-4">

                    <div className="text-start">
                        <h2 className="mb-3">Crea una cuenta</h2>

                        <p className="mb-0">
                            Comienza con tu registro para poder disfrutar de asombrosas botas.
                        </p>
                    </div>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="d-flex flex-column gap-3"
                    >

                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Nombre de usuario"
                            required
                            minLength={3}
                            value={form.username}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                            required
                            minLength={3}
                            value={form.nombre}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            placeholder="Apellido"
                            required
                            minLength={3}
                            value={form.apellido}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Contraseña"
                            required
                            minLength={8}
                            value={form.password}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="dni"
                            className="form-control"
                            placeholder="DNI (opcional)"
                            pattern="[0-9]{7,8}"
                            value={form.dni}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="direccion"
                            className="form-control"
                            placeholder="Dirección (opcional)"
                            value={form.direccion}
                            onChange={handleChange}
                        />

                        <input
                            type="tel"
                            name="telefono"
                            className="form-control"
                            placeholder="Teléfono (opcional)"
                            pattern="[0-9+\-\s()]{6,20}"
                            value={form.telefono}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary w-100 signin-btn"
                        >
                            Registrarse
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Signin;