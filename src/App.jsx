import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from "react";

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';

// Páginas
import Bienvenido from './pages/Bienvenido';
import ComoAyudar from './pages/ComoAyudar';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Proyecto from './pages/Proyecto';
import QuienesSomos from './pages/QuienesSomos';
import Voluntariado from './pages/Voluntariado';
import LoginAdmin from "./pages/LoginAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem("adminToken"); // ✅ ahora está definido correctamente dentro

  // Altura responsiva para móviles
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Bienvenido />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/como-ayudar" element={<ComoAyudar />} />
          <Route path="/proyectos" element={<Proyecto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route
            path="/admin/dashboard"
            element={token ? <DashboardAdmin /> : <Navigate to="/admin/login" />}
          />
        </Routes>
      </main>

      {/* Mostrar el formulario debajo de todas las páginas excepto /contacto */}
      {location.pathname !== "/contacto" && <ContactForm />}
      <Footer />

      <WhatsAppButton />
    </div>
  );
}

// ✅ Esta función es obligatoria para que el export default funcione
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
