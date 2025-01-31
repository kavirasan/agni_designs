import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { TiLocationArrow } from "react-icons/ti";
import { useSet, useWindowScroll } from "react-use";
import gsap from "gsap";
import { PiNavigationArrowFill } from "react-icons/pi";
import AnimatedTitle from "../TextAnimation/AnimatedTitle";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import "./Navbar.css";

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
    // path: "/about",
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
  const [showAboutDropdownValues, setshowAboutDropdownValues] = useState(false);

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
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 rounded-xl"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2  ">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center gap-7  ">
            <img src={logo} className="w-20 h-20 p-2" />
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
                      Our Services
                      <svg
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
                        className="hidden md:flex absolute items-center justify-center -ml-2 mt-8  bg-white/80 divide-y divide-gray-100 rounded-sm shadow  dark:bg-gray-700"
                        onMouseEnter={() => setShowDropdownValues(true)}
                        onMouseLeave={() => setShowDropdownValues(false)}
                      >
                        <ul
                          className="py-2 w-72 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownHoverButton"
                        >
                          <li>
                            <Link
                              to="/mep"
                              className=" flex gap-2 items-center  px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              MEP Design Services
                              <MdArrowOutward size={15} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/TechnicalDueDiligence"
                              className="flex gap-2 px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Technical Due Diligence
                              <MdArrowOutward size={15} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Validating_Value_Engineering"
                              className="flex gap-2 px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Validating & Value Engineering
                              <MdArrowOutward size={15} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/BIM"
                              className="flex gap-2 px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              MEP BIM Services
                              <MdArrowOutward size={15} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Third"
                              className="flex gap-2 px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Third Party Testing
                              <MdArrowOutward size={15} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : item.id === 3 ? (
                  <div
                    className="  hidden md:flex relative"
                    onMouseEnter={() => setshowAboutDropdownValues(true)}
                    onMouseLeave={() => setshowAboutDropdownValues(false)}
                  >
                    <button className="font-bold  nav-hover-btn flex items-center">
                      About
                      <svg
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
                    {showAboutDropdownValues == true && (
                      <div
                        id="dropdownHover"
                        className="hidden md:flex absolute items-center justify-center -ml-2 mt-8  bg-white/80  divide-y divide-gray-100 rounded-sm shadow  dark:bg-gray-700"
                        onMouseEnter={() => setshowAboutDropdownValues(true)}
                        onMouseLeave={() => setshowAboutDropdownValues(false)}
                      >
                        <ul
                          className="py-2 w-64 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownHoverButton"
                        >
                          <li>
                            <Link
                              to="/about"
                              className=" flex gap-2 items-center justify-center  px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              About Agni
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/client"
                              className="flex gap-2 justify-center px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Our Clients
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/software"
                              className="flex gap-2 justify-center px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Our Softwares
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/projects"
                              className="flex gap-2 justify-center px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Our Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team"
                              className="flex gap-2  justify-center px-4 py-2 font-semibold text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Our Team
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
              className="mr-14"
            />
          </div>
          <span
            className="flex justify-center items-center ml-10 mt-10"
            onClick={() => setMobileNavVisible(false)}
          >
            Home
          </span>
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="flex justify-center items-center ml-10 ">
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
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="flex justify-center items-center ml-10 ">
                About Us <MdOutlineKeyboardArrowDown className="mx-2" />
              </span>
            )}
          >
            <Dropdown.Item className=" py-2">About Agni</Dropdown.Item>
            <Dropdown.Item className=" py-2">Our Clients</Dropdown.Item>
            <Dropdown.Item className=" py-2">Our Projects</Dropdown.Item>
            <Dropdown.Item className=" py-2">Our Softwares</Dropdown.Item>
            <Dropdown.Item className="py-2">Our Team</Dropdown.Item>
          </Dropdown>

          <span
            className="flex justify-center items-center ml-10"
            onClick={() => setMobileNavVisible(false)}
          >
           Contact Us
          </span>
          <span
            className="flex justify-center items-center ml-10"
            onClick={() => setMobileNavVisible(false)}
          >
            Get a Quote
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
