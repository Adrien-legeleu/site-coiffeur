"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/darkMode";

const navigation = [
  { name: "Home", id: 1 },
  { name: "A propos", id: 3 },
  { name: "nos services", id: 2 },
];

export const Header = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  const handleScroll = (id: string) => {
    // Utiliser "string" au lieu de "any"
    const section = document.getElementById(id.toString());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex max-sm:fixed top-0 left-0 w-full z-50 justify-end sm:justify-between sm:px-10 px-4 py-7 items-center max-w-[1500px] mx-auto font-montserrat">
      <div className="hidden sm:flex font-fredoka text-3xl text-black/70 dark:text-white/70">
        STURMAYR
      </div>
      <div className=" gap-16 hidden lg:flex">
        {navigation.map((item) => {
          const isSelected = item.name === selectedLink;
          return (
            <button
              key={item.name}
              className={`relative text-lg leading-6 no-underline ${
                isSelected ? "font-semibold " : "text-gray-500"
              }`}
              onClick={() => {
                setSelectedLink(item.name);
                handleScroll(item.id.toString()); // Convertir "id" en chaîne
              }}
            >
              {item.name}
              {isSelected ? (
                <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                  <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                    <motion.path
                      d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                      stroke="#7043EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 1,
                      }}
                    />
                  </svg>
                </motion.div>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href="/booking" target="_blank">
          <Button variant="destructive">Prendre un rendez-vous</Button>
        </Link>
      </div>
    </div>
  );
};
