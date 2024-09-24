import { Spotlight } from "@/components/acernity/Spotlight";

export default function Home() {
  return (
    <div className="h-full antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-screen">
        <h1>Coiffeur</h1>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
    </div>
  );
}
