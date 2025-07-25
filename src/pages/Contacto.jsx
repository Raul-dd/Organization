import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../components/ContactForm";

function Contacto() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Función para establecer el alto del viewport
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Establecer el valor inicial
    setVh();

    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <main
      className="w-full bg-gradient-to-b from-[#004F84] to-[#000e33] text-white px-4 py-16"
      style={{ minHeight: 'calc(100 * var(--vh, 1vh))' }}
    >
      {/* Título */}
      <h1
        data-aos="fade-down"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 tracking-wide"
      >
        Contáctanos
      </h1>

      {/* Subtítulo */}
      <p
        data-aos="fade-up"
        className="text-center max-w-2xl mx-auto text-lg sm:text-xl mb-12 opacity-90"
      >
        Estamos aquí para ayudarte. Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      {/* Formulario */}
      <div className="text-white text-sm sm:text-base md:text-lg">
        <ContactForm />
      </div>
    </main>
  );
}

export default Contacto;