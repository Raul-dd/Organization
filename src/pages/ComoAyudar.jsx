import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";

function ComoAyudar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="flex flex-col items-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }} // 👈 Evita reacomodo
    >
      {/* Título */}
      <h1
        data-aos="fade-down"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
      >
        ¿Cómo Ayudar?
      </h1>

      {/* Cuerpo del mensaje */}
      <div
        data-aos="fade-up"
        className="max-w-4xl w-full text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-justify bg-white p-6 rounded-2xl shadow-xl"
      >
        <p>Es muy fácil, solo te pedimos tres tipos de ayuda:</p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>1.-</strong> Económicamente.
          </li>
          <li>
            <strong>2.-</strong> Con artículos de primera necesidad tales como alimentos no perecederos, útiles escolares y ropa en buen estado, etc.
          </li>
          <li>
            <strong>3.-</strong> Únete a nosotros y participa. Ayúdanos en esta labor que será de gran satisfacción para ti. Brindar apoyo a los que lo necesitan te hará recibir el cariño de estas personas, en quienes lograrás un futuro mejor.
          </li>
        </ul>

        <p className="text-center font-semibold text-blue-800 mt-10 relative">
          Contáctanos llenando el formulario.
        </p>

        {/* Flecha animada */}
        <div className="flex justify-center mt-4">
          <FaArrowDown className="text-blue-800 animate-bounce text-3xl" />
        </div>
      </div>
    </main>
  );
}

export default ComoAyudar;
