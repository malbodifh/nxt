import { Check, Globe, Cpu, Lightbulb } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: [string, string, string];
}

const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8 text-brand-primary" />,
    title: "Desarrollo Web Premium",
    description:
      "Sitios y aplicaciones web de alto rendimiento, diseñados para convertir visitantes en clientes y posicionarte como referente en tu industria.",
    benefits: ["Carga en menos de 2 segundos", "Optimizado para SEO desde el inicio", "Diseño adaptable a cualquier dispositivo"],
  },
  {
    icon: <Cpu className="w-8 h-8 text-brand-primary" />,
    title: "Aplicaciones a Medida",
    description:
      "Desarrollamos software personalizado que automatiza procesos internos, mejora la experiencia de tus usuarios y escala junto con tu empresa.",
    benefits: ["Arquitectura escalable y segura", "Integraciones con tus sistemas actuales", "Panel de administración incluido"],
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-primary" />,
    title: "Consultoría Técnica",
    description:
      "Analizamos tu stack tecnológico, identificamos cuellos de botella y te damos un plan claro para modernizar y optimizar tu infraestructura digital.",
    benefits: ["Auditoría técnica detallada", "Hoja de ruta priorizada por impacto", "Acompañamiento en la implementación"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-inter font-semibold text-sm text-brand-primary uppercase tracking-widest mb-4 block">
            Servicios
          </span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-brand-text">
            ¿En qué podemos ayudarte?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-brand-border rounded-lg p-8 bg-white hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-grotesk font-semibold text-xl text-brand-text mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-brand-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-inter text-sm text-brand-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
