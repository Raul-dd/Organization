import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const WhatsAppButton = () => {
  const url = "https://wa.me/523349852528?text=Hola,%20quiero%20más%20información%20sobre%20sus%20proyectos.";

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-center gap-2 group">
      {/* Mensaje arriba del botón */}
      <div className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm shadow-md animate-bounce">
        ¡Chatea con nosotros!
      </div>

      {/* Flechita */}
      <FaArrowDown className="text-blue-700 animate-bounce" />

      {/* Botón de WhatsApp */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 p-4 rounded-full shadow-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
