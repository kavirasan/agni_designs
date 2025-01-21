import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useSet, useWindowScroll } from "react-use";
import gsap from "gsap";
import { PiNavigationArrowFill } from "react-icons/pi";
import AnimatedTitle from "./AnimatedTitle";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

// const navItems = ["Home", "About", "Contact Us", "Get in Touch"];
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "our Services",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/contact",
  },
  {
    id: 5,
    name: "Get a Quote",
    path: "/getintouch",
  },
];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisisble, setIsNavVisible] = useState(true);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [showDropdownValues, setShowDropdownValues] = useState(false);

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
      duration: 0.3,
    });
  }, [isNavVisisble]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6   rounded-xl "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2  ">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center gap-7  ">
            <img src={logo} className="w-20 h-20 p-2" />
            {/* <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="md:flex hidden items-center justify-center gap-1 "
            /> */}
            {/* <div className="hidden md:flex ">
              <Dropdown
                label="our Services"
                dismissOnClick={false}
                color="light"
                pill
                onMouseEnter={() => setShowDropdownValues(true)}
                onMouseLeave={() => setShowDropdownValues(false)}
              >
                <Dropdown.Item className="px-10 py-2">
                  MEP Design Services <MdOutlineArrowOutward className="mx-2" />
                </Dropdown.Item>
                <Dropdown.Item className="px-10 py-2">
                  Technical Due Diligence
                  <MdOutlineArrowOutward className="mx-2" />
                </Dropdown.Item>
                <Dropdown.Item className="px-10 py-2">
                  Validating & Value Engineering
                  <MdOutlineArrowOutward className="mx-2" />
                </Dropdown.Item>
                <Dropdown.Item className="px-10 py-2">
                  MEP BIM Services <MdOutlineArrowOutward className="mx-2" />
                </Dropdown.Item>
                <Dropdown.Item className="px-10 py-2">
                  Third party Testing <MdOutlineArrowOutward className="mx-2" />
                </Dropdown.Item>
              </Dropdown>
            </div> */}
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:flex md:items-center justify-between ">
              {navItems.map((item) =>
                item.id === 2 ? (
                  <div
                    className="hidden md:flex relative"
                    onMouseEnter={() => setShowDropdownValues(true)}
                    onMouseLeave={() => setShowDropdownValues(false)}
                  >
                    <button className="font-bold  nav-hover-btn flex items-center">
                      Our Services<svg
                        className="w-4 h-4 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {showDropdownValues == true && (
                      <div
                        id="dropdownHover"
                        className="hidden md:flex absolute items-center justify-center -ml-2 mt-8  bg-white divide-y divide-gray-100 rounded-md shadow  dark:bg-gray-700"
                        onMouseEnter={() => setShowDropdownValues(true)}
                        onMouseLeave={() => setShowDropdownValues(false)}
                      >
                        <ul
                          className="py-2 w-72 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownHoverButton"
                        >
                          <li>
                            <Link
                              to="/mep-design"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              MEP Design Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/technical-due-diligence"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Technical Due Diligence
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/validating-value-engineering"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Validating & Value Engineering
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/mep-bim"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              MEP BIM Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/third-party-testing"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Third Party Testing
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    // href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn font-bold "
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="flex md:hidden -mt-2 mr-5">
            <PiNavigationArrowFill
              size={25}
              className="text-black/70"
              onClick={() => setMobileNavVisible(true)}
            />
          </div>
        </nav>
      </header>

      <div
        className={` flex  md:hidden bg-white fixed top-0 w-72 h-screen transform ${
          mobileNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-in-out`}
      ></div>

      {mobileNavVisible && (
        <div className="fixed max-w-xl w-full flex flex-col  items-start justify-center mt-10 gap-10">
          <div className="flex flex-row justify-between items-center -my-10 w-full px-5">
            <img
              src={logo}
              className=" w-20 h-20 object-contain rounded-full p-2"
            />
            <IoCloseOutline
              size={30}
              color="black"
              onClick={() => setMobileNavVisible(false)}
              // className="absolute -top-8 right-10 transition-all transform duration-900 ease-out rotate-90 translate-y-2"
              className="mr-7"
            />
          </div>

          <AnimatedTitle
            title="Home"
            containerClass=" mt-10 !text-black"
            onClick={() => setMobileNavVisible(false)}
          />
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="flex justify-center items-center ml-10 font-bold">
                Our Services <MdOutlineKeyboardArrowDown className="mx-2" />
              </span>
            )}
          >
            <Dropdown.Item className=" py-2">
              {" "}
              MEP Design Services <MdOutlineArrowOutward className="mx-2" />
            </Dropdown.Item>
            <Dropdown.Item className=" py-2">
              {" "}
              Technical Due Diligence <MdOutlineArrowOutward className="mx-2" />
            </Dropdown.Item>
            <Dropdown.Item className=" py-2">
              Validating & Value Engineering{" "}
              <MdOutlineArrowOutward className="mx-2" />
            </Dropdown.Item>
            <Dropdown.Item className=" py-2">
              MEP BIM Services <MdOutlineArrowOutward className="mx-2" />
            </Dropdown.Item>
            <Dropdown.Item className="py-2">
              Third party Testing <MdOutlineArrowOutward className="mx-2" />
            </Dropdown.Item>
          </Dropdown>
          <AnimatedTitle title="About Us" containerClass=" !text-black " />
          <AnimatedTitle
            title="Our Projects "
            containerClass="!text-black text-center"
          />
          <AnimatedTitle
            title="Get a Quote"
            containerClass="!text-black text-center"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
