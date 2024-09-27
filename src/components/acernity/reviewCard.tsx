import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Pierre",
    username: "@pierre",
    body: "Le meilleur salon de coiffure de la ville ! Je ressors toujours avec une coupe parfaite.",
    img: "https://avatar.vercel.sh/pierre",
  },
  {
    name: "Marie",
    username: "@marie",
    body: "Un service exceptionnel ! L'équipe est à l'écoute et très professionnelle.",
    img: "https://avatar.vercel.sh/marie",
  },
  {
    name: "Luc",
    username: "@luc",
    body: "Je suis impressionné par la qualité des soins et la précision des coupes.",
    img: "https://avatar.vercel.sh/luc",
  },
  {
    name: "Sophie",
    username: "@sophie",
    body: "Une ambiance chaleureuse et des coiffeurs talentueux. Mon salon préféré !",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Antoine",
    username: "@antoine",
    body: "C'est toujours un plaisir de venir ici, je suis toujours satisfait de ma coupe.",
    img: "https://avatar.vercel.sh/antoine",
  },
  {
    name: "Claire",
    username: "@claire",
    body: "Un accueil chaleureux, des conseils avisés et des résultats toujours impeccables.",
    img: "https://avatar.vercel.sh/claire",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-600/[.20] dark:hover:bg-gray-600/[.25]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 -left-5 w-1/3 bg-gradient-to-r from-white/45 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/80 dark:from-background"></div>
    </div>
  );
}
