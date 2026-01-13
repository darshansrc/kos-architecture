import Image from "next/image";

export default function Header() {
  return (
    <header className=" fixed top-0 w-screen p-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full flex-row gap-2 ">
        <div>
          <h1
            className="text-2xl  font-semibold text-black"
            style={{ fontFamily: "'Quantico', sans-serif", fontWeight: 700 }}
          >
            Komerz OS
          </h1>
          <p className="text-xs text-muted-foreground ">
            One of a kind end-to-end operating system to launch and manage brand
            in market across all channels using Al & ML
          </p>
        </div>
        <div className="">
          <Image
            src="/logos/logo-big.svg"
            alt="Komerz OS Logo"
            width={48}
            height={48}
          />
        </div>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>
    </header>
  );
}
