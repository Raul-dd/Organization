import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function QuienesSomos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main
      className="bg-gradient-to-b from-white to-blue-50 px-6 py-20"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Título */}
      <h1
        data-aos="fade-down"
        className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-16"
      >
        ¿Quiénes Somos?
      </h1>

      {/* Origen */}
      <section
        data-aos="fade-up"
        className="max-w-5xl mx-auto mb-20 bg-white shadow-lg rounded-xl p-8 md:p-12 text-justify space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
          Origen
        </h2>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          Un grupo de jóvenes de diferentes estados de la república comparten muchas experiencias con diferentes tipos de personas del país como son comunidades indígenas de las diferentes etnias del país, niños, jóvenes, adultos, personas indigentes, sectores marginados, vulnerables, en situación de exclusión social, y personas con capacidades distintas.
        </p>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          Después de varias convivencias, estos jóvenes se dan a la tarea de buscar la forma de ayudar a todas estas personas no solo con ayuda material sino también con ayuda humana, haciendo que vean a la sociedad como una persona más que los ama y que los quiere tal como son, y que todo ese amor se demuestra con gestos de afecto, amor y cariño, y aportando un grano de arena en lo material para brindarles la ayuda que necesitan en todos los ámbitos.
        </p>
      </section>

      {/* Objetivo */}
      <section
        data-aos="fade-up"
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12 text-justify space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
          Objetivo
        </h2>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          El principio fundamental de esta asociación es hacer que todas las personas que necesiten ayuda humana o material, la obtengan de alguna manera a través de nosotros. Así mismo como asociación nos unimos como si fuéramos una misma persona para lograr los objetivos y las metas y demostrar que nuestra sociedad los ayuda sin nada a cambio. Nuestro trabajo se enfoca más a lo humano ya que para nuestros fundadores lo principal es la atención humana, y personalizada.
        </p>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          Sabemos que es importante dar una despensa, medicamentos, becas educativas, consultas médicas, aparatos de rehabilitación o cualquier otro tipo de ayuda o apoyo acompañado siempre de gestos de cariño y palabras de afecto importantes para el desarrollo de las personas, sociedades marginadas y sectores necesitados. Por eso nos llamamos <strong>AYUDAR ES AMAR, A.C.</strong>, porque no hay nada más gratificante que ayudar y amar sin esperar una retribución a cambio.
        </p>
      </section>
    </main>
  );
}

export default QuienesSomos;
