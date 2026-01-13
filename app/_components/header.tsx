import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary fixed top-0 w-screen p-4 ">
      <div className="max-w-7xl mx-auto flex items-center flex-row gap-2 ">
        <div className="bg-[#ebe6da] rounded size-8 flex items-center justify-center">
          <Image src="/icon.svg" alt="Komerz OS Logo" width={20} height={20} />
        </div>
        <div>
          <h1 className="text-md text-white font-semibold">Komerz OS</h1>
          <p className="text-xs text-muted-foreground ">
            One of a kind end-to-end operating system to launch and manage brand
            in market across all channels using Al & ML
          </p>
        </div>
      </div>
    </header>
  );
}
