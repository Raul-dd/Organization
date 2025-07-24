import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
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
    <Router>
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Bienvenido />} />
        
          </Routes>
        </main>
        <ContactForm />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
