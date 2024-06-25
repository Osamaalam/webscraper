import Link from "next/link";
import Image from "next/image";
import React from "react";

const navIcons = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/black-heart.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/user.svg",
    alt: "search",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo2.png"
            width={160}
            height={160}
            alt="logo"
          />
          <p
            className="nav-logo"
            style={{ fontSize: "3rem", paddingLeft: "0px", marginLeft: "0px" }}
          >
            Track<span className="text-green-500">Lib</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={`${Math.random()}`}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
