// components/acernity/Spotlight.tsx
"use client"; // Ajoute cette ligne pour que le composant soit en mode client

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
};

export const Spotlight = ({ className }: SpotlightProps) => {
  const { theme } = useTheme(); // Utilisation de useTheme

  const spotlightFill = theme === "dark" ? "white" : "url(#rainbowGradient)"; // Ajuste la couleur en fonction du mode

  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none relative z-[1] h-[219%] w-[188%] lg:w-[134%] opacity-100", // Passe de `absolute` à `relative`
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={spotlightFill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <linearGradient id="rainbowGradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#ff007f" /> {/* Magenta */}
          <stop offset="25%" stopColor="#ff6600" /> {/* Orange */}
          <stop offset="50%" stopColor="#33cc33" /> {/* Vert */}
          <stop offset="75%" stopColor="#0066ff" /> {/* Bleu */}
          <stop offset="100%" stopColor="#cc00cc" /> {/* Violet */}
        </linearGradient>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
};
