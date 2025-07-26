import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";

const inputStyle =
  "p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out";

const ContactForm = () => {
  const location = useLocation();
  const isContactoPage = location.pathname === "/contacto";

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefono") {
      // Solo números permitidos
      const soloNumeros = value.replace(/\D/g, ""); // elimina letras y símbolos
      setFormData((prev) => ({ ...prev, [name]: soloNumeros }));
    } else if (name === "nombre" || name === "apellido") {
      // Solo letras, espacios y acentos
      const soloLetras = value.replace(/[^a-zA-ZÁÉÍÓÚáéíóúñÑ\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: soloLetras }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Validar teléfono: exactamente 10 dígitos
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(formData.telefono)) {
      alert("Por favor, introduce un número de teléfono válido de 10 dígitos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente.");
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          email: "",
          mensaje: "",
        });
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
    }
  };




  return (
    <section
      id="contact-form"
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
            <a href="https://www.facebook.com/ayudaresamarac" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ayudaresamarac" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/AyudaresAmarAC" target="_blank" rel="noopener noreferrer">
              <SiX />
            </a>
            <a href="mailto:agutierrez@ayudaresamar.org">
              <FaEnvelope />
            </a>
            {/* Ícono de WhatsApp dentro del formulario */}
            <a
              href="https://wa.me/523349852528?text=Hola,%20me%20gustaría%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Formulario */}
          <div className="w-full">
            <h2 className="text-white font-bold mb-4 text-xl">Esperamos tener noticias suyas.</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre *"
                className={`${inputStyle} col-span-1`}
                required
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                name="apellido"
                type="text"
                placeholder="Apellido(s) *"
                className={`${inputStyle} col-span-1`}
                required
                value={formData.apellido}
                onChange={handleChange}
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje *"
                rows={4}
                className={`${inputStyle} col-span-1 lg:row-span-2 resize-none`}
                required
                value={formData.mensaje}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                className={`${inputStyle} col-span-1`}
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="telefono"
                type="tel"
                placeholder="Teléfono *"
                className={`${inputStyle} col-span-1`}
                value={formData.telefono}
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
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
          <h2 className="text-white font-bold mb-4 text-xl">Esperamos tener noticias suyas.</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-sm">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-4">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre *"
                className={inputStyle}
                required
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                name="apellido"
                type="text"
                placeholder="Apellido(s) *"
                className={inputStyle}
                required
                value={formData.apellido}
                onChange={handleChange}
              />
              <input
                name="telefono"
                type="tel"
                placeholder="Teléfono *"
                className={inputStyle}
                value={formData.telefono}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                className={inputStyle}
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col gap-3">
              <textarea
                name="mensaje"
                placeholder="Mensaje *"
                rows={6}
                className={`${inputStyle} resize-none`}
                required
                value={formData.mensaje}
                onChange={handleChange}
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
            <a href="https://www.facebook.com/ayudaresamarac" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ayudaresamarac" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/AyudaresAmarAC" target="_blank" rel="noopener noreferrer">
              <SiX />
            </a>
            <a href="mailto:agutierrez@ayudaresamar.org">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/523349852528?text=Hola,%20AYUDAR%20ES%20AMAR%20AC%20quiero%20más%20información%20sobre:"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
