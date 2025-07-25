import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  'BIENVENIDO',
  '¿QUIÉNES SOMOS?',
  '¿CÓMO AYUDAR?',
  'PROYECTOS',
  'CONTACTO',
  'GALERÍA',
  'TRABAJO SOCIAL Y VOLUNTARIADO',
];

const rutas = {
  'BIENVENIDO': '/',
  '¿QUIÉNES SOMOS?': '/quienes-somos',
  '¿CÓMO AYUDAR?': '/como-ayudar',
  'PROYECTOS': '/proyectos',
  'CONTACTO': '/contacto',
  'GALERÍA': '/galeria',
  'TRABAJO SOCIAL Y VOLUNTARIADO': '/voluntariado',
};

const Navbar = () => {
  const navRef = useRef(null);
  const liRefs = useRef([]);
  const dropdownButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(menuItems.length);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const calcularVisibles = () => {
    const nav = navRef.current;
    if (!nav) return;

    liRefs.current.forEach((li) => {
      if (li) li.style.display = 'inline-flex';
    });

    let count = menuItems.length;
    while (nav.scrollWidth > nav.clientWidth && count > 0) {
      count--;
      if (liRefs.current[count]) {
        liRefs.current[count].style.display = 'none';
      }
    }

    setVisibleCount(count);
  };

  const updateDropdownPosition = () => {
    if (menuOpen && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left - 250,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownButtonRef.current && !dropdownButtonRef.current.contains(e.target) &&
          dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      calcularVisibles();
      updateDropdownPosition();
    };

    calcularVisibles();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updateDropdownPosition();
  }, [menuOpen]);

  const handleMenuItemClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full font-sans relative z-[100]">
      {/* Encabezado superior */}
      <div
        data-aos="slide-down"
        className="bg-[#D9D9D9] flex items-center justify-between px-4 py-2 relative"
      >
        <img
          src={logo}
          alt="logo"
          className="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pl-5 sm:pl-0">

          <h1 className="text-[1.25rem] sm:text-2xl md:text-5xl font-medium text-[#004F84] leading-tight mb-1">
            AYUDAR ES AMAR AC
          </h1>
          <p className="text-[0.8rem] sm:text-sm md:text-lg italic text-gray-800">
            "Hay más dicha en dar que recibir"
          </p>
        </div>
      </div>

      {/* Navbar azul */}
      <nav
        data-aos="fade-down"
        className="bg-[#004F84] text-white text-sm sm:text-base md:text-[16px] font-medium relative z-50"
      >
        <ul
          ref={navRef}
          className="flex flex-nowrap justify-center items-center gap-x-2 px-4 h-[40px] w-full text-center overflow-hidden"
        >
          {menuItems.map((item, index) => {
            const isActive = location.pathname === rutas[item];
            return (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                className="whitespace-nowrap h-full flex items-center transition-transform duration-300 hover:scale-105"
                style={{ display: index < visibleCount ? 'inline-flex' : 'none' }}
              >
                <Link
                  to={rutas[item]}
                  className={`w-full h-full px-3 flex items-center justify-center transition-colors duration-200 ${
                    isActive ? 'bg-[#003c63]' : 'hover:bg-[#003c63]'
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          {visibleCount < menuItems.length && (
            <li className="relative h-full flex items-center" ref={dropdownButtonRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-[#003c63] rounded transition-transform duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Menú desplegable usando Portal */}
      {menuOpen && createPortal(
        <div
          ref={dropdownRef}
          className="fixed bg-[#004F84] shadow-lg border border-white rounded min-w-[250px]"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 99999,
          }}
        >
          <ul>
            {menuItems.slice(visibleCount).map((item, idx) => {
              const isActive = location.pathname === rutas[item];
              return (
                <li
                  key={idx}
                  className={`px-4 py-2 hover:bg-[#003c63] whitespace-nowrap ${
                    isActive ? 'bg-[#003c63]' : ''
                  }`}
                >
                  <a
                    href={rutas[item]}
                    onClick={(e) => handleMenuItemClick(e, rutas[item])}
                    className="block w-full text-white cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Navbar;