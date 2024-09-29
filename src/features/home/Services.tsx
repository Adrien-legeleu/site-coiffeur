"use client";
import { Highlight } from "@/components/acernity/hero-highlight";
import { DialogContact } from "@/components/contact/DialogContact";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
  return (
    <div className="flex items-center flex-col py-20 sm:px-10 px-3 gap-20 max-w-[1500px] mx-auto font-montserrat">
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
        <Highlight className="text-black sm:text-5xl text-4xl w-full  font-medium font-fredoka tracking-wider text-center ">
          Nos Services
        </Highlight>
      </motion.h1>
      <div className="lg:grid grid-cols-40/60 w-full  2xl:gap-32 ">
        <div className="lg:grid grid-cols-2 pr-10 items-center gap-8 hidden">
          <Image
            width={500}
            height={1000}
            src="/images/manblackwhite.jpg"
            alt="coiffeur image coupe"
            className="  h-96 rounded-full relative -top-8 object-cover"
          />
          <Image
            width={500}
            height={1000}
            src="/images/girlposing.jpg"
            alt="coiffeur image coupe"
            className=" h-96 rounded-full relative top-8 object-cover"
          />
        </div>
        <Tabs defaultValue="info" className="max-w-[700px] max-lg:mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Horaire</TabsTrigger>
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="price">Tarifs</TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
            <Card className="flex items-center jusitfy-center flex-col">
              <CardHeader>
                <CardTitle className="text-center text-xl">Horaires</CardTitle>
                <CardDescription className="text-base">
                  Les horaires de notre salon de coiffure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 w-[300px]">
                {schedules.map((schedule) => {
                  return (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between"
                    >
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  );
                })}
              </CardContent>
              <CardFooter>
                <DialogContact />
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="info">
            <Card className="">
              <CardHeader>
                <CardTitle className="pb-6 text-center text-xl">
                  Informations
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-5 justify-between max-sm:flex-col-reverse max-md:items-center">
                <div className="text-lg space-y-5">
                  <div className="space-y-2">
                    <p>91120 Palaiseau</p>
                    <p>11 Rue de Paris</p>
                  </div>
                  <div className="space-y-2">
                    <p>07 68 73 52 38</p>
                    <p>adrienlegeleu@gmail.com</p>
                  </div>
                  <CardFooter className="pt-10">
                    <DialogContact />
                  </CardFooter>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6201190050797!2d2.2413091767494016!3d48.712741410944865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67814a0a012db%3A0xd5f7b43e77bc32b8!2sRue%20de%20Paris%2C%2091120%20Palaiseau!5e0!3m2!1sfr!2sfr!4v1727330708418!5m2!1sfr!2sfr"
                  className="border-0 rounded-3xl w-full lg:w-2/3 h-48 sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="price">
            <Card className="flex items-center jusitfy-center flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-center">Tarifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 py-10">
                {prices.map((price) => {
                  return (
                    <div
                      key={price.type}
                      className="flex items-center gap-20 justify-between"
                    >
                      <span className="font-medium">{price.type}</span>
                      <span className="font-semibold">{price.price}</span>
                    </div>
                  );
                })}
              </CardContent>
              <CardFooter>
                <DialogContact />
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const schedules = [
  { day: "Lundi", hours: "09:00-19:00" },
  { day: "Mardi", hours: "09:00-19:00" },
  { day: "Mercredi", hours: "09:00-19:00" },
  { day: "Jeudi", hours: "09:00-19:00" },
  { day: "Vendredi", hours: "09:00-19:00" },
  { day: "Samedi", hours: "09:00-19:00" },
  { day: "Dimanche", hours: "Fermé" },
];
const prices = [
  { type: "Coupe Enfant (moins de 16ans)", price: "16€" },
  { type: "Coupe Adulte", price: "19€" },
  { type: "Barbe Homme", price: "11€" },
  { type: "Shampoing", price: "4€" },
  { type: "Soin visage", price: "9€" },
];
