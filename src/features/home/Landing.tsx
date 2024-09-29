"use client";
import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Landing = () => {
  return (
    <div className="sm:px-20 px-5 flex flex-col lg:flex-row items-center lg:pt-0 sm:pt-20 pt-28  sm:justify-center justify-start h-screen sm:gap-32 max-sm:mb-32 max-w-[1500px] mx-auto">
      <h2 className="text-black/70 dark:text-white/70 text-5xl sm:text-6xl z-10 sm:hidden  text-shadow-lg dark:text-shadow-none font-fredoka max-sm:pb-10  font-semibold tracking-wider text-center ">
        STURMAYR
      </h2>
      <div className="sm:flex-1 flex items-center flex-col gap-8  z-10 font-montserrat">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words="Bienvenue chez STURMAYR , votre destination coiffure. Notre équipe dévouée transforme votre look avec expertise et soin. Réservez votre moment de beauté dès aujourd'hui !"
          className="text-center font-medium sm:text-2xl text-xl text-shadow-lg dark:text-shadow-none py-3"
        />
        <a href="/booking" target="_blank">
          <Button>Prenez rendez-vous maintenant !</Button>
        </a>
      </div>
      <div className="sm:flex-1 w-full h-full  gap-10 flex items-center justify-between relative   max-sm:px-5 lg:justif-center">
        <Image
          src="/images/womenPink.jpg"
          alt="photo coiffeur"
          className="rounded-full lg:h-[80%]  lg:w-48 sm:h-80 h-64 sm:w-48 w-32 top-5 relative object-cover max-lg:opacity-90"
          width={600}
          height={1000}
        />
        <Image
          src="/images/barberMan.jpg"
          alt="photo coiffeur"
          className="rounded-full lg:h-[80%]  lg:w-48 sm:h-80 h-64 sm:w-48 w-32  relative top-12 object-cover max-lg:opacity-90"
          width={600}
          height={1000}
        />
      </div>
    </div>
  );
};
