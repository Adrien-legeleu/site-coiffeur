import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-16 ">
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
    </div>
  );
};
