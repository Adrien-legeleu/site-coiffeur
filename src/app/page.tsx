import { Spotlight } from "@/components/acernity/Spotlight";
import { Header } from "@/features/layout";

export default function Home() {
  return (
    <div className="h-full  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <Header />
        <h1>Coiffeur</h1>
      </div>
    </div>
  );
}
