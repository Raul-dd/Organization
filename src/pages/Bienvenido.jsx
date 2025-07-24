import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heartImage from "../assets/corazon.png"; // Asegúrate que este archivo exista

function Bienvenido() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Sección Bienvenida */}
      <main className="flex flex-col items-center px-4 py-20 bg-gradient-to-b from-white to-blue-50 min-h-[100dvh]">
        {/* Título */}
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-12 text-center"
        >
          Bienvenido
        </h1>

        {/* Contenido principal */}
        <div
          data-aos="fade-up"
          className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-10"
        >
          {/* Texto */}
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 md:w-1/2 text-justify">
            <p>
              <strong>AYUDAR ES AMAR, A.C.</strong> es una Organización de la
              Sociedad Civil (OSC) con un fuerte compromiso con la sociedad, y
              con un particular énfasis en las Comunidades Indígenas, Niños,
              Jóvenes, Adultos y Mujeres de escasos recursos de México.
            </p>
            <p>
              Trabajamos para que las condiciones de las comunidades
              vulnerables mejoren, a través de programas integrales que
              promueven el bienestar, la equidad y el desarrollo con un enfoque
              humano y solidario.
            </p>
          </div>

          {/* Imagen animada */}
          <img
            data-aos="zoom-in"
            src={heartImage}
            alt="Imagen con forma de corazón"
            className="w-64 sm:w-72 md:w-96 lg:w-[28rem] drop-shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </main>
    </>
  );
}

export default Bienvenido;
