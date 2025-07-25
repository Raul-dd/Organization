import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const proyectos = [
  {
    texto: 'Contribuir en la sana alimentación y mejor calidad de vida de las jefas de familia del municipio de San Miguel Tlacotepec, Oaxaca a través de la producción de hortalizas en invernadero mediante la construcción de 4 módulos familiares',
    año: 2018,
  },
  {
    texto: 'Módulos familiares de alimentos orgánicos para la alimentación de las familias indígenas de la localidad de Yerba Santa, Municipio de Santiago Yosondua, Oaxaca',
    año: 2017,
  },
  {
    texto: 'Módulos de huertos familiares, ubicados en la comunidad de plumas del municipio de Santiago Yosondua Oaxaca',
    año: 2016,
  },
  {
    texto: 'Certeza jurídica a los habitantes de las comunidades indígenas del municipio de Cadereyta',
    año: 2016,
  },
  {
    texto: 'Capacitación a comisariados indígenas del municipio de Cadereyta',
    año: 2015,
  },
  {
    texto: 'Capacitación a subdelegados indígenas del municipio de Cadereyta',
    año: 2013,
  },
  {
    texto: 'Certeza jurídica a los comuneros de Sombrerete',
    año: 2012,
  },
  {
    texto: 'Continuidad fortalecimiento y gestión para lograr la delegación indígena en Sombrerete',
    año: 2011,
  },
  {
    texto: 'Formación para autoridades en equidad de género: conciliadores por la no violencia',
    año: 2010,
  },
  {
    texto: 'Defensa y protección jurídica de los terrenos del núcleo agrario ejidal de la Tinaja, municipio de Cadereyta de Montes, Querétaro.',
    año: 2009,
  },
  {
    texto: 'Defensa y protección jurídica en la comunidad indígena de la Tinaja',
    año: 2008,
  },
  {
    texto: 'Diagnostico agrario y jurídico en la comunidad agraria indígena del Sombrerete',
    año: 2007,
  },
];

function Proyectos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="px-4 py-16 bg-gradient-to-b from-white to-blue-50"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Título con animación */}
      <h1
        data-aos="fade-down"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
      >
        Proyectos
      </h1>

      {/* Lista de proyectos */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-blue-800 text-white text-sm font-semibold rounded-bl-xl">
              Ejecución {proyecto.año}
            </div>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
              {proyecto.texto}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Proyectos;
