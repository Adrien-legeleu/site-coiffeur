import Link from "next/link";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { Label } from "../ui/label";

export const DialogContact = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Contactez-nous</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]  bg-white dark:bg-black font-montserrat">
        <DialogHeader className="space-y-5">
          <DialogTitle className="text-center font-medium text-2xl font-fredoka">
            Nous contacter
          </DialogTitle>
          <DialogDescription className="text-lg text-center">
            Si vous avez des questions ou souhaitez prendre rendez-vous,
            n'hésitez pas à nous contacter !
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-5">
          <div className="flex gap-2">
            <p className="font-medium">numéro de téléphone :</p>
            <p>07 68 73 52 38</p>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">email :</p>

            <p>adrienlegeleu@gmail.com</p>
          </div>
        </div>
        <DialogFooter className="pt-5">
          <a href="/booking" target="_blank">
            <Button variant="destructive">Prendre rendez-vous</Button>
          </a>{" "}
          <Button type="submit">Annuler</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
