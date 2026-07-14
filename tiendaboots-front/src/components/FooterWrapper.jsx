import { useAuth } from "../context/AuthContext";
import Footer from "./Footer/Footer";

export default function FooterWrapper() {

    const { user, loading } = useAuth();

    if (loading || !user) {
        return null;
    }

    return <Footer />;
}