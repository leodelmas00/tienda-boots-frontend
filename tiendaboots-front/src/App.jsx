import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/reset.css';
import './styles/global.css';
import './styles/variables.css';

import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';

import ProtectedRoute from './components/ProtectedRoute';
import NavbarWrapper from './components/NavbarWrapper';

function App() {
    return (
        <BrowserRouter>

            <NavbarWrapper />

            <Routes>

                {/* Rutas públicas */}

                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signin" element={<Signin />} />

                {/* Rutas privadas */}
                <Route path="/Home" element={ <ProtectedRoute> <Home /> </ProtectedRoute>} />
                <Route path="/Contact" element={ <ProtectedRoute> <Contact /> </ProtectedRoute> }/>
                <Route path="/Products" element={ <ProtectedRoute> <Products /> </ProtectedRoute> } />

            </Routes>
        </BrowserRouter>
    );
}

export default App;