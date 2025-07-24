import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Bienvenido from './pages/Bienvenido';
import ComoAyudar from './pages/ComoAyudar';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Proyecto from './pages/Proyecto';
import QuienesSomos from './pages/QuienesSomos';
import Voluntariado from './pages/Voluntariado';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Bienvenido />} />
            <Route path="/como-ayudar" element={<ComoAyudar />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
