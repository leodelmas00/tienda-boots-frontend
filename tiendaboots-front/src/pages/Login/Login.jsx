import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.svg";
import loginImage from "../../assets/login_image.webp";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: "",
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
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al iniciar sesión");
            }

            console.log("Usuario logueado:", data.user);

            login(data.user);

            navigate("/Home");

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <div className="col-md-7 p-0 d-flex">
                        <img
                            src={loginImage}
                            alt=""
                            className="w-100 object-fit-cover login-image"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>

                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center p-4">

                        <div className="pt-5 d-flex justify-content-center">
                            <img
                                src={logo}
                                alt="Logo"
                                width="350"
                                height="116"
                                className="logo-hover"
                            />
                        </div>

                        <div className="flex-grow-1 d-flex flex-column justify-content-center w-100 px-5">

                            <h2 className="mb-4">Iniciar sesión</h2>

                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <form
                                className="w-100 mb-5"
                                onSubmit={handleSubmit}
                            >

                                <input
                                    type="text"
                                    name="username"
                                    className="form-control mb-3"
                                    placeholder="Usuario"
                                    required
                                    minLength={3}
                                    value={form.username}
                                    onChange={handleChange}
                                />

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control mb-3"
                                    placeholder="Contraseña"
                                    required
                                    minLength={8}
                                    value={form.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 login-btn"
                                >
                                    Ingresar
                                </button>

                                <p className="mt-3 mb-0">
                                    ¿No tenés una cuenta?{" "}
                                    <Link to="/Signin">
                                        Registrate acá
                                    </Link>
                                </p>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;