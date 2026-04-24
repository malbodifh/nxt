import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <FeaturedProject />
      <Process />
      <CTA />
      <footer className="bg-brand-text text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-grotesk font-semibold text-lg">Bytlane Studio</span>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Bytlane Studio. Todos los derechos reservados.
          </p>
          <p className="text-slate-400 text-sm">Costa Rica</p>
        </div>
      </footer>
    </main>
  );
}
