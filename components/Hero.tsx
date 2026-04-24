import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />

      {/* Nav */}
      <header className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-6 pb-4 flex items-center justify-between">
        <span className="font-grotesk font-bold text-xl text-brand-text tracking-tight">
          Bytlane<span className="text-brand-primary">.</span>
        </span>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-inter font-medium text-brand-muted">
          <a href="#about" className="hover:text-brand-text transition-colors">Nosotros</a>
          <a href="#services" className="hover:text-brand-text transition-colors">Servicios</a>
          <a href="#process" className="hover:text-brand-text transition-colors">Proceso</a>
          <a
            href={`https://wa.me/506XXXXXXXX`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primaryHover transition-colors text-sm"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full py-20">
          <div className="max-w-3xl">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-brand-border rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-inter font-medium text-brand-muted">
                Disponible para nuevos proyectos
              </span>
            </div>

            <h1 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-brand-text leading-tight mb-6">
              Desarrollamos Software que{" "}
              <span className="text-brand-primary">Impulsa tu Negocio</span>
            </h1>

            <p className="font-inter text-lg md:text-xl text-brand-muted mb-10 max-w-xl">
              Creamos soluciones digitales a medida para empresas que quieren crecer en serio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/506XXXXXXXX?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-primaryHover transition-colors font-inter font-semibold text-base shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                Agenda una Consulta Gratuita
              </a>
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-inter font-semibold text-base"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
