import { Spotlight } from "@/components/acernity/Spotlight";
import { Landing, Services } from "@/features/home";
import { Header } from "@/features/layout";

export default function Home() {
  return (
    <div className="h-full  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      <Header />

      <Landing />

      <Services />
    </div>
  );
}
