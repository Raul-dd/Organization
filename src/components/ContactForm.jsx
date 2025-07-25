import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useLocation } from "react-router-dom";

const inputStyle =
  "p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out";

const ContactForm = () => {
  const location = useLocation();
  const isContactoPage = location.pathname === "/contacto";

  return (
    <section
      className={`${isContactoPage ? "bg-transparent" : "bg-[#004F84]"} py-10 px-6`}
      style={{ minHeight: "auto" }}
    >
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 transition-all duration-500"
        style={{ minHeight: "auto" }}
      >
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[60px_1fr] gap-6 items-start">
          {/* Íconos laterales */}
          <div className="flex flex-col gap-6 items-center text-white text-2xl">
            <a
              href="https://www.facebook.com/ayudaresamarac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ayudaresamarac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/AyudaresAmarAC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX />
            </a>
            <a href="mailto:zdiaz7521@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          {/* Formulario */}
          <div className="w-full">
            <h2 className="text-white font-bold mb-4 text-xl">
              Esperamos tener noticias suyas.
            </h2>
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
              <input
                type="text"
                placeholder="Nombre *"
                className={`${inputStyle} col-span-1`}
                required
              />
              <input
                type="text"
                placeholder="Apellido(s) *"
                className={`${inputStyle} col-span-1`}
                required
              />
              <textarea
                placeholder="Mensaje *"
                rows={4}
                className={`${inputStyle} col-span-1 lg:row-span-2 resize-none`}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className={`${inputStyle} col-span-1`}
                required
              />
              <input
                type="tel"
                placeholder="Teléfono *"
                className={`${inputStyle} col-span-1`}
              />
              <div className="col-span-2 text-white text-xs italic flex items-end">
                * campos obligatorios
              </div>
              <div className="flex justify-end items-end">
                <button
                  type="submit"
                  className="bg-[#00056E] text-white hover:bg-white hover:text-blue-900 font-bold py-2 px-6 rounded transition duration-300"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <h2 className="text-white font-bold mb-4 text-xl">
            Esperamos tener noticias suyas.
          </h2>
          <form className="grid grid-cols-2 gap-4 text-sm">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre *"
                className={inputStyle}
                required
              />
              <input
                type="text"
                placeholder="Apellido(s) *"
                className={inputStyle}
                required
              />
              <input
                type="tel"
                placeholder="Teléfono *"
                className={inputStyle}
              />
              <input
                type="email"
                placeholder="Email *"
                className={inputStyle}
                required
              />
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col gap-3">
              <textarea
                placeholder="Mensaje *"
                rows={6}
                className={`${inputStyle} resize-none`}
                required
              />
              <div className="flex items-center justify-between gap-3 text-white text-xs italic">
                <span>* campos obligatorios</span>
                <button
                  type="submit"
                  className="bg-[#00056E] text-white hover:bg-white hover:text-blue-900 font-bold py-2 px-6 rounded transition duration-300"
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </form>

          {/* Redes sociales debajo en móvil */}
          <div className="flex justify-end gap-6 mt-8 text-white text-2xl pr-4">
            <a
              href="https://www.facebook.com/ayudaresamarac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ayudaresamarac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/AyudaresAmarAC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX />
            </a>
            <a href="mailto:zdiaz7521@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
