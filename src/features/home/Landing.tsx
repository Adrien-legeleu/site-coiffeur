import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Landing = () => {
  return (
    <div className="px-24 flex items-center justify-center h-screen gap-32">
      <div className="flex-1 flex items-center flex-col gap-8">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              quo aliquam eveniet atque facere dicta animi maxime ullam fuga
              commodi."
          className="text-center"
        />
        <Button>Prenez rendez-vous maintenant !</Button>
      </div>
      <div className="flex-1 w-full h-full gap-10 flex items-center justif-center">
        <Image
          src="/images/womenPink.jpg"
          alt="photo coiffeur"
          className="rounded-full h-[80%] w-48  object-cover"
          width={600}
          height={1000}
        />
        <Image
          src="/images/barberMan.jpg"
          alt="photo coiffeur"
          className="rounded-full h-[80%] w-48 relative top-10 object-cover"
          width={600}
          height={1000}
        />
      </div>
    </div>
  );
};
