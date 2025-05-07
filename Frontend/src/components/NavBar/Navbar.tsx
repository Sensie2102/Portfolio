"use client"; 
import React,{useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";


interface NavbarProps extends React.HTMLAttributes<HTMLElement> {

}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentSection, setCurrentSection] = useState("home");
    const sections = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 10);

      sections.forEach((sectionID) =>{
        const section = document.getElementById(sectionID);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop - sectionHeight / 3) {
            setCurrentSection(sectionID);
            return
          }
        }
      })
    }

    const baseLinkClass = "relative inline-block py-2 transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300";

    const activeLinkClass = "text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] after:w-full after:bg-gradient-to-r after:from-[var(--accent)] after:to-[var(--highlight)]";

    const inactiveLinkClass = "text-[var(--foreground)] after:w-0 hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-[var(--accent)] hover:after:to-[var(--highlight)]";

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);;
    },[])

    return (
        <nav className={clsx(
            "sticky top-0 z-50 w-full grid grid-cols-3 items-center px-24 py-4 transition-all",
            scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
          )}>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] font-bold text-2xl">
        Mafaaz Chandwale
      </div>
      <div></div>
      <div className="flex justify-end gap-12">
        <Link href="#home" className={`${baseLinkClass} ${currentSection === "home" ? activeLinkClass : inactiveLinkClass}`}>
          Home
        </Link>
        <Link href="#about" className={`${baseLinkClass} ${currentSection === "about" ? activeLinkClass : inactiveLinkClass}`}>
          About
        </Link>
        <Link href="#projects" className={`${baseLinkClass} ${currentSection === "projects" ? activeLinkClass : inactiveLinkClass}`}>
          Projects
        </Link>
        <Link href="#contact" className={`${baseLinkClass} ${currentSection === "contact" ? activeLinkClass : inactiveLinkClass}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;