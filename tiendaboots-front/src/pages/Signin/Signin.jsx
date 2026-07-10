import "./Signin.css"

function Signin() {
    return (
        <section>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="w-50 card p-5 bg-white d-flex flex-column gap-4">
                    <div className="text-start">
                        <h2 className="mb-3 text-start">Crea una cuenta</h2>
                        <p className="mb-0">
                            Comienza con tu registro para poder disfrutar de asombrosas botas.
                        </p>
                    </div>

                    <form className="d-flex flex-column gap-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de usuario"
                            required
                            minLength={3}
                        />

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            minLength={8}
                        />

                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Teléfono (opcional)"
                            pattern="[0-9+\-\s()]{6,20}"
                        />

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Dirección (opcional)"
                        />

                        <input
                            type="text"
                            className="form-control"
                            placeholder="DNI (opcional)"
                            pattern="[0-9]{7,8}"
                        />

                        <button type="submit" className="btn btn-primary w-100 signin-btn">
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Signin;