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
import { div } from "framer-motion/client";

export function Services() {
  return (
    <Tabs defaultValue="info" className="w-[700px] m-auto py-20">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="info">Informations</TabsTrigger>
        <TabsTrigger value="schedule">Horaire</TabsTrigger>
        <TabsTrigger value="price">Tarifs</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <Card className="flex items-center jusitfy-center flex-col">
          <CardHeader>
            <CardTitle className="text-center text-xl">Informations</CardTitle>
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
      <TabsContent value="schedule">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="price">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
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
