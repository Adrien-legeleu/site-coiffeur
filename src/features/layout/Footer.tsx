import Link from "next/link";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiPinterest,
  SiX,
} from "react-icons/si";
export const Footer = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center pb-16 pt-28 px-20">
      <div>
        <h2 className="text-3xl tracking-wide text-center font-medium">
          STURMAYR
        </h2>
      </div>
      <div className="flex gap-12 justify-center">
        <Link href="#1">Home</Link>
        <Link href="#2">Services</Link>
        <Link href="#3">A propos</Link>
      </div>
      <div className="w-full  border-dashed border-gray-400/30 border-[1.5px] rounded-full"></div>
      <div className="flex justify-between w-full">
        <i>@ Adrien Legeleux</i>
        <div className="flex gap-8">
          <SiGithub size={20} />
          <SiInstagram size={20} />
          <SiPinterest size={20} />
          <SiX size={20} />
          <SiFacebook size={20} />
        </div>
      </div>
    </div>
  );
};
