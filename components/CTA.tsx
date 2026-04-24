import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "506XXXXXXXX";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me gustaría saber más sobre los servicios de Bytlane Studio."
);

export default function CTA() {
  return (
    <section className="bg-brand-text py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
          ¿Listo para comenzar?
        </h2>
        <p className="font-inter text-slate-400 text-base mb-10">
          Cuéntanos tu idea y te damos una opinión honesta, sin compromiso.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-inter font-semibold px-8 py-4 rounded-lg transition-colors text-base shadow-lg hover:shadow-emerald-500/30"
        >
          <MessageCircle className="w-5 h-5" />
          Escríbenos por WhatsApp
        </a>

        <p className="font-inter text-slate-500 text-sm mt-6">
          Respondo en menos de 24 horas.
        </p>
      </div>
    </section>
  );
}
