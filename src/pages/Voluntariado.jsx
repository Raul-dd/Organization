import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";

function Voluntariado() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="bg-gradient-to-b from-white to-blue-50 px-6 py-20 flex flex-col items-center justify-center text-center"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Título */}
      <h1
        data-aos="fade-down"
        className="text-4xl sm:text-5xl font-bold text-blue-900 mb-8"
      >
        Trabajo Social y Voluntariado
      </h1>

      {/* Descripción */}
      <p
        data-aos="fade-up"
        className="max-w-3xl text-gray-800 text-lg sm:text-xl leading-relaxed"
      >
        Ser voluntario de una ONG es compartir valores de solidaridad y de justicia, orientando las acciones a favor de los más vulnerables. De esta manera, al formar parte de un voluntariado en una ONG, colocas tus habilidades y destrezas a disposición de comunidades desprotegidas o con evidentes carencias materiales.
      </p>

      {/* Llamado a la acción */}
      <div data-aos="zoom-in" className="mt-12">
        <p className="text-blue-800 font-semibold text-xl">
          Llena este formulario para contactarnos
        </p>
        <div className="flex justify-center mt-3 animate-bounce">
          <FaArrowDown className="text-blue-800 text-3xl" />
        </div>
      </div>
    </main>
  );
}

export default Voluntariado;
