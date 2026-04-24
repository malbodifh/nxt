interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Consulta",
    description: "Entendemos tu negocio, tus metas y qué necesitas construir antes de escribir una sola línea de código.",
  },
  {
    number: "02",
    title: "Desarrollo",
    description: "Construimos con sprints cortos y te mostramos avances reales cada semana para que siempre sepas dónde estamos.",
  },
  {
    number: "03",
    title: "Pruebas",
    description: "Probamos en distintos dispositivos y escenarios. Solo avanzamos cuando todo funciona como debe.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Lanzamos, te capacitamos y seguimos disponibles. El proyecto no termina en el deploy.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-inter font-semibold text-sm text-brand-primary uppercase tracking-widest mb-4 block">
            Cómo Trabajamos
          </span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-brand-text">
            Un proceso claro, sin sorpresas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <p className="font-grotesk font-bold text-6xl text-gray-100 leading-none mb-4 select-none">
                {step.number}
              </p>
              <h3 className="font-grotesk font-semibold text-xl text-brand-text mb-2">
                {step.title}
              </h3>
              <p className="font-inter text-brand-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
