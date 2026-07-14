import Navbar from "./Navbar/Navbar";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function NavbarWrapper() {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading || !user) {
        return null;
    }

    const publicRoutes = ["/Login", "/Signin"];

    if (publicRoutes.includes(location.pathname)) {
        return null;
    }

    return <Navbar />;
}

export default NavbarWrapper;