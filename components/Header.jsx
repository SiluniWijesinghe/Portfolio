import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="px-20">
            <span >
              <Image
                src="/assets/A&S.png"
                priority
                quality={100}
                height={50}
                width={50}
                alt=""
                className="object-contain"
              />
            </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden"><MobileNav/></div>
      </div>
    </header>
  );
};

export default Header;
