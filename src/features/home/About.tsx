"use client";
import { AnimatedTooltip } from "@/components/acernity/animated-tooltip";
import { HeroHighlight, Highlight } from "@/components/acernity/hero-highlight";
import React from "react";
import { motion } from "framer-motion";
import { MarqueeDemo } from "@/components/acernity/reviewCard";

const people = [
  {
    id: 1,
    name: "Emilie Doe",
    designation: "Coiffeur pro",
    image: "/images/salarie.jpeg",
  },

  {
    id: 2,
    name: "Pierre Smith",
    designation: "coiffeur intermédiraire",
    image: "/images/salarie2.jpeg",
  },
  {
    id: 3,
    name: "John Davis",
    designation: "Coiffeur",
    image: "/images/salarie3.jpeg",
  },
  {
    id: 4,
    name: "Bruno Durden",
    designation: "coiffeur",
    image: "/images/salarie4.jpeg",
  },
];

export function About() {
  return (
    <HeroHighlight className=" py-20">
      <div className="max-w-[1500px] mx-auto flex items-center justify-center flex-col font-montserrat">
        {" "}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Highlight className="text-black sm:text-5xl text-4xl w-full font-fredoka  font-medium tracking-wider text-center ">
            A propos de nous
          </Highlight>
        </motion.h1>
        <div className="mt-32 w-screen lg:grid grid-cols-2 flex max-lg:gap-20 flex-col-reverse">
          <div>
            <div className="flex flex-row items-center justify-center  mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-lg font-semibold tracking-wider leading-loose text-center md:px-32 px-12 lg:px-20">
              Chez STURMAYR, notre équipe passionnée est dédiée à vous offrir
              une expérience de coiffure exceptionnelle. Découvrez nos talents
              et laissez-nous révéler votre beauté unique.
            </p>
          </div>

          <MarqueeDemo />
        </div>
      </div>
    </HeroHighlight>
  );
}
