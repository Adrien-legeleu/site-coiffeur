"use client";
import { AnimatedTooltip } from "@/components/acernity/animated-tooltip";
import { HeroHighlight, Highlight } from "@/components/acernity/hero-highlight";
import React from "react";
import { motion } from "framer-motion";

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
    <HeroHighlight>
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
        <Highlight className="text-black text-5xl  font-semibold tracking-wider text-center ">
          A propos de nous
        </Highlight>
      </motion.h1>
      <div className="flex flex-row items-center justify-center mt-32 mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </HeroHighlight>
  );
}
