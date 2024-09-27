import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  return (
    <Tabs defaultValue="info" className="w-[700px] m-auto py-20" id="2">
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
            <Button>Contactez-nous</Button>
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
          <CardContent className="flex gap-5 justify-between">
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
                <Button>Contactez-nous</Button>
              </CardFooter>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6201190050797!2d2.2413091767494016!3d48.712741410944865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67814a0a012db%3A0xd5f7b43e77bc32b8!2sRue%20de%20Paris%2C%2091120%20Palaiseau!5e0!3m2!1sfr!2sfr!4v1727330708418!5m2!1sfr!2sfr"
              className="border-0 rounded-3xl w-2/3 h-80"
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
                  <span className="font-semibold">{price.type}</span>
                  <span className="font-semibold">{price.price}</span>
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button>Contactez-nous</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
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
