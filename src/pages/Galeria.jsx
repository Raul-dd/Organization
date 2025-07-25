import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png"; // Puedes reemplazarlo con tus imágenes reales

function Galeria() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔁 Simulación de 20 imágenes con el logo (puedes reemplazar con tus URLs reales)
  const imagenes = Array.from({ length: 20 }, (_, i) => ({
    src: logo,
    alt: `Imagen ${i + 1}`,
  }));

  return (
    <main
      className="bg-gradient-to-b from-white to-blue-50 px-4 py-16"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Título */}
      <h1
        data-aos="fade-down"
        className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12"
      >
        Galería de Proyectos
      </h1>

      {/* Grid de imágenes */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {imagenes.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 border-4 border-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Galeria;
