import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5  py-7">
          {/* logo */}
          <div className="text-2xl xl:text-3xl font-extrabold tracking-wider font-sora">
            talha <span className="text-2xl font-thin">jazZy</span>
          </div>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
