"use client";
import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Landing = () => {
  return (
    <div className="sm:px-20 px-5 flex flex-col lg:flex-row items-center lg:pt-0 sm:pt-20 pt-40  justify-center h-screen gap-32 max-sm:mb-32 max-w-[1500px] mx-auto">
      <h2 className="text-black text-5xl sm:text-6xl z-10 sm:hidden  text-shadow-lg font-fredoka  font-semibold tracking-wider text-center ">
        STURMAYR
      </h2>
      <div className="sm:flex-1 flex items-center flex-col gap-8  z-10 font-montserrat">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words="Bienvenue chez STURMAYR , votre destination coiffure. Notre équipe dévouée transforme votre look avec expertise et soin. Réservez votre moment de beauté dès aujourd'hui !"
          className="text-center font-medium text-2xl text-shadow-lg dark:text-shadow-none py-3"
        />
        <a href="/booking" target="_blank">
          <Button>Prenez rendez-vous maintenant !</Button>
        </a>
      </div>
      <div className="sm:flex-1 w-full h-full  gap-10 flex items-center justify-between lg:relative absolute max-lg:top-7  max-lg:left-0 max-lg:px-20  max-sm:px-5 lg:justif-center">
        <Image
          src="/images/womenPink.jpg"
          alt="photo coiffeur"
          className="rounded-full lg:h-[80%]  lg:w-48 h-80 sm:w-48 w-40 -top-32 sm:top-0 relative object-cover max-lg:opacity-90"
          width={600}
          height={1000}
        />
        <Image
          src="/images/barberMan.jpg"
          alt="photo coiffeur"
          className="rounded-full lg:h-[80%] lg:w-48 h-80 sm:w-48 w-40 relative top-64 sm:top-10 object-cover max-lg:opacity-90"
          width={600}
          height={1000}
        />
      </div>
    </div>
  );
};
