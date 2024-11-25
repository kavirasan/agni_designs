import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Home", "About", "Contact Us", "Get in Touch"];
const Navbar = () => {
  const navContainerRef = useRef(null);
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisisble, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY == 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setlastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef, {
      y: isNavVisisble ? 0 : -100,
      opacity: isNavVisisble ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisisble]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src={logo} className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-500 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
