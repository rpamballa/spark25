import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "react-feather";
import ContactUs from "../components/contact";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

import logo from "../imgs/Logo_Landing.png";
import lightLogo from "../imgs/lightLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const toggleContactForm = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="header"
        className={`${
          theme == "light"
            ? "bg-white "
            : "bg-[linear-gradient(to_right,_#211258,_#2d24a8,_#191b70,_#080824)]"
        } navbar shadow-md py-4 px-8 border-none `}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={theme == "light" ? lightLogo : logo}
              alt="Spark25 Logo"
              className="w-11 h-11"
            />
            <span
              className={`ml-3 ${
                theme == "light" ? "text-black " : "text-white "
              } font-bold text-3xl`}
            >
              Spark25
            </span>
          </Link>

          <button
            className="md:hidden w-12 h-12 border-2 rounded-full items-center justify-center flex"
            color=""
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? (
              <FaSun className="text-xl " />
            ) : (
              <FaMoon className="text-xl text-white" />
            )}
          </button>

          {/* Hamburger icon for mobile */}
          <button
            className={`block md:hidden mr-2 ${
              theme == "light" ? "text-black " : "text-white "
            }`}
            onClick={toggleMenu}
          >
            <AlignJustify className="w-8 h-8" />
          </button>

          {/* Desktop Menu (shown on larger screens) */}
          <div className="hidden md:flex space-x-8 ml-auto mr-6">
            <Link
              to="/about"
              className={`${
                theme == "light" ? "text-black " : "text-white "
              } text-xl mt-3 px-2`}
            >
              About
            </Link>
            {/* Blog tab hidden until the blog launches
            <Link
              to="/blog"
              className={`${
                theme == "light" ? "text-black " : "text-white "
              } text-xl mt-3 px-2`}
            >
              Blog
            </Link>
            */}
            <button
              onClick={toggleContactForm}
              className={`md:px-4 flex justify-center items-center py-2 px-2 border md:text-xl ${
                theme == "light" ? "text-black " : "text-white "
              } ring-1 border-transparent ring-fuchsia-700 rounded-full`}
            >
              Contact Us
              <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                <svg
                  className={`"w-6 h-6 " ${
                    theme == "light" ? "text-black " : "text-white "
                  } `}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <button
              className="w-12 h-12 border-2 rounded-full items-center justify-center flex"
              color=""
              pill
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? (
                <FaSun className="text-xl " />
              ) : (
                <FaMoon className="text-xl text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu (shown on small screens) */}
          <div
            ref={menuRef}
            className={`${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }
              md:hidden absolute top-[80px] left-0 w-full ${
                theme == "light"
                  ? "bg-white"
                  : "bg-[linear-gradient(to_right,_#211258,_#2d24a8,_#191b70,_#080824)]"
              }  py-4 px-8 text-center overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <Link
              to="/about"
              onClick={handleMenuClick}
              className={`block ${
                theme == "light" ? "text-black" : "text-white"
              } py-2`}
            >
              About
            </Link>
            {/* Blog tab hidden until the blog launches
            <Link
              to="/blog"
              onClick={handleMenuClick}
              className={`block ${
                theme == "light" ? "text-black" : "text-white"
              } py-2`}
            >
              Blog
            </Link>
            */}
            <button
              onClick={() => {
                handleMenuClick();
                toggleContactForm();
              }}
              className={`block ${
                theme == "light" ? "text-black" : "text-white"
              } mx-auto px-4 py-2 rounded-xl transition-colors cursor-pointer`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />
    </>
  );
};

export default Header;
