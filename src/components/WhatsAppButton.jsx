import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const location = useLocation();
  const [showButton, setShowButton] = useState(true);

  const url =
    "https://wa.me/523349852528?text=Hola,%20quiero%20más%20información%20sobre%20sus%20proyectos.";

  useEffect(() => {
    let observer;

    const observeForm = () => {
      const target = document.getElementById("contact-form");
      if (!target) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          setShowButton(!entry.isIntersecting);
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(target);
    };

    // Espera un pequeño tiempo si el formulario aún no ha sido montado
    const timeout = setTimeout(observeForm, 200);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]); // <- Se vuelve a ejecutar al cambiar de página

  // ❌ Nunca mostrar en la ruta de contacto
  if (location.pathname === "/contacto") return null;

  return (
    <div
        style={{ right: '10px', bottom: '20px' }}
      className={`fixed bottom-20 right-28 sm:right-6 md:right-8 lg:right-10 z-50 flex flex-col items-center gap-1 transition-opacity duration-500 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm shadow-md animate-bounce text-center">
        ¡Chatea con nosotros!
      </div>

      <FaArrowDown className="text-blue-700 text-sm sm:text-base animate-bounce" />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-110 p-3 sm:p-4"
      >
        <FaWhatsapp className="text-white text-lg sm:text-2xl md:text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
