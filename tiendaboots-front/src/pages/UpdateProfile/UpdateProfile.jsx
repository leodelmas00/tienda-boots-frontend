import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "../Signin/Signin.css";
import "./UpdateProfile.css";

import genericPP from "../../assets/genericPP.webp";

function UpdateProfile() {

    const { user, refreshUser } = useAuth();

    const [preview, setPreview] = useState(genericPP);

    const [image, setImage] = useState(null);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        telefono: "",
        direccion: "",
        dni: ""
    });

    useEffect(() => {
        if (!user) return;

        setForm({
            username: user.username ?? "",
            email: user.email ?? "",
            password: "",
            telefono: user.telefono ?? "",
            direccion: user.direccion ?? "",
            dni: user.dni ?? ""
        });

        if (user.foto_perfil) {
            setPreview(`http://localhost:3000/${user.foto_perfil}`);
        } else {
            setPreview(genericPP);
        }

    }, [user]);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if(file){
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData();

            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);
            });

            if (image) {
                formData.append("foto_perfil", image);
            }

            const response = await fetch("http://localhost:3000/profile", {
                method: "PUT",
                credentials: "include",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            await refreshUser();

            alert("Perfil actualizado correctamente");

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (
        <section>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="w-50 card p-5 bg-white d-flex flex-column gap-4">

                    <div className="text-start">
                        <h2 className="mb-3">Actualiza tu perfil</h2>

                        <p className="mb-0">
                            Modifica la información de tu cuenta cuando lo necesites.
                        </p>
                    </div>

                    <form  className="d-flex flex-column gap-3" onSubmit={handleSubmit}>

                        <div className="profile-photo-container">

                            <img
                                src={preview}
                                alt="Foto de perfil"
                                className="update-profile-picture"
                            />

                            <input
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                className="d-none"
                                onChange={handleImageChange}
                            />

                            <label
                                htmlFor="profileImage"
                                className="btn uploadBtn"
                            >
                                Cambiar foto
                            </label>

                        </div>

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
                            placeholder="Nueva contraseña"
                            minLength={8}
                            value={form.password}
                            onChange={handleChange}
                        />

                        <input
                            type="tel"
                            name="telefono"
                            className="form-control"
                            placeholder="Teléfono (opcional)"
                            pattern="[0-9+\\-\\s()]{6,20}"
                            value={form.telefono}
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
                            type="text"
                            name="dni"
                            className="form-control"
                            placeholder="DNI (opcional)"
                            pattern="[0-9]{7,8}"
                            value={form.dni}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary w-100 signin-btn"
                        >
                            Guardar cambios
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default UpdateProfile;