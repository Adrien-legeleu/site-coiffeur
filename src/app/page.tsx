import { Spotlight } from "@/components/acernity/Spotlight";
import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Landing } from "@/features/home";
import { Header } from "@/features/layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full  antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
      <div className="h-screen">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        <Header />
        <Landing />
      </div>
    </div>
  );
}
