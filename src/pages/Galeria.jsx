import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Galeria() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Llamar a la API para traer imágenes reales
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/admin/gallery");
        const data = await res.json();
        setImagenes(data);
      } catch (error) {
        console.error("Error al cargar la galería:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main
      className="bg-gradient-to-b from-white to-blue-50 px-4 py-16"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
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
        {imagenes.length === 0 ? (
          <p className="text-center col-span-full text-gray-600 italic">No hay imágenes disponibles</p>
        ) : (
          imagenes.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 border-4 border-white"
            >
              <img
                src={img.url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Galeria;
