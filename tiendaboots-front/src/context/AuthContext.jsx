import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function refreshUser() {
        const response = await fetch("http://localhost:3000/me", {
            credentials: "include",
        });

        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
        }
    }

    useEffect(() => {
        async function checkAuth() {
            try {
                await refreshUser();
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    }, []);

    function login(user) {
        setUser(user);
    }

    async function logout() {
        await fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include",
        });

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}