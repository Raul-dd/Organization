import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useEffect } from "react";

import Bienvenido from './pages/Bienvenido';
import ComoAyudar from './pages/ComoAyudar';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Proyecto from './pages/Proyecto';
import QuienesSomos from './pages/QuienesSomos';
import Voluntariado from './pages/Voluntariado';

function AppContent() {
  const location = useLocation();

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
    <div className="flex flex-col">
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
        </Routes>
      </main>

      {/* ✅ Solo mostrar el formulario si no estás en /contacto */}
      {location.pathname !== "/contacto" && <ContactForm />}

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
