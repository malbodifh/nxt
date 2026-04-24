import { ArrowRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  stack: string[];
  caseStudyHref: string;
}

const project: Project = {
  name: "Portal de Gestión para Clínica Privada",
  description:
    "Diseñamos y desarrollamos un sistema interno para agendar citas, gestionar expedientes y automatizar recordatorios por WhatsApp. Redujimos el tiempo administrativo del equipo en un 60%.",
  stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "WhatsApp API"],
  caseStudyHref: "#",
};

export default function FeaturedProject() {
  return (
    <section id="featured" className="bg-brand-bgAlt py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-inter font-semibold text-sm text-brand-primary uppercase tracking-widest mb-4 block">
            Proyecto Destacado
          </span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-brand-text">
            Trabajo real, resultados reales
          </h2>
        </div>

        <div className="border border-brand-border rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
          {/* Image placeholder */}
          <div className="w-full aspect-video bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-8 h-8 text-brand-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-inter text-sm text-brand-muted">Imagen del proyecto</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="font-grotesk font-bold text-2xl text-brand-text mb-3">
              {project.name}
            </h3>
            <p className="font-inter text-brand-muted text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-inter font-medium text-xs text-brand-primary bg-blue-50 border border-blue-100 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.caseStudyHref}
              className="inline-flex items-center gap-2 font-inter font-semibold text-brand-primary hover:text-brand-primaryHover transition-colors text-sm"
            >
              Ver caso de estudio
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
