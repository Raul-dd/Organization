import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">AYUDAR ES AMAR AC</Link>
        <ul className="hidden md:flex space-x-4 font-semibold">
          <li><Link to="/">BIENVENIDO</Link></li>
          <li><Link to="/quienes-somos">¿QUIÉNES SOMOS?</Link></li>
          <li><Link to="/como-ayudar">¿CÓMO AYUDAR?</Link></li>
          <li><Link to="/proyecto">PROYECTOS</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
          <li><Link to="/galeria">GALERÍA</Link></li>
          <li><Link to="/voluntariado">TRABAJO SOCIAL Y VOLUNTARIADO</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
