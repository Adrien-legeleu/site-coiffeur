import { Spotlight } from "@/components/acernity/Spotlight";
import { About, Landing, Services } from "@/features/home";
import { Footer, Header } from "@/features/layout";

export default function Home() {
  return (
    <div className="h-full antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="absolute -top-64 md:top-0 left-0 w-full h-full z-0" />
      <Header />
      <section id="1" className="relative z-10">
        {" "}
        {/* Assurez-vous que ces sections sont au-dessus */}
        <Landing />
      </section>
      <section id="2" className="relative z-10">
        <Services />
      </section>
      <section id="3" className="relative z-10">
        <About />
      </section>
      <Footer />
    </div>
  );
}
