import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí luego se conectará con Laravel
  };

  return (
    <section className="bg-blue-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-6">
          {/* Iconos sociales */}
          <div className="flex flex-col space-y-4 items-start">
            <i className="fab fa-facebook text-2xl"></i>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fas fa-envelope text-2xl"></i>
          </div>

          {/* Formulario */}
          <form className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input
              name="nombre"
              type="text"
              placeholder="Nombre *"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="p-2 rounded text-black"
            />
            <input
              name="apellido"
              type="text"
              placeholder="Apellido(s) *"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="p-2 rounded text-black"
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 rounded text-black"
            />
            <input
              name="telefono"
              type="text"
              placeholder="Teléfono *"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="p-2 rounded text-black"
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje *"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="p-2 rounded col-span-1 md:col-span-2 text-black h-24 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit col-span-1 md:col-span-2 self-end ml-auto"
            >
              ENVIAR
            </button>
          </form>
        </div>
        <p className="text-sm mt-4 italic">* campos obligatorios</p>
      </div>
    </section>
  );
};

export default ContactForm;
