export default function About() {
  return (
    <section id="about" className="bg-brand-bgAlt py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-inter font-semibold text-sm text-brand-primary uppercase tracking-widest mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-brand-text mb-6 leading-tight">
              Un equipo pequeño con resultados grandes
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-inter text-brand-muted text-base leading-relaxed">
              Somos Bytlane Studio, un estudio boutique de desarrollo web y software con base en Costa Rica.
              Trabajamos con empresas y emprendedores que necesitan soluciones digitales que realmente funcionen,
              no solo que se vean bien.
            </p>
            <p className="font-inter text-brand-muted text-base leading-relaxed">
              Muchos negocios pierden clientes y oportunidades por tener sitios lentos, aplicaciones que fallan
              o procesos manuales que deberían estar automatizados. Nosotros resolvemos exactamente eso,
              con código limpio y entregas puntuales.
            </p>
            <p className="font-inter text-brand-muted text-base leading-relaxed">
              Nos diferenciamos por la atención directa: siempre hablas con quien desarrolla. Sin intermediarios,
              sin agencias infladas. Solo soluciones rápidas, escalables y con soporte real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
