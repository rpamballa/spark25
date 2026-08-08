import { useContext, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import Vector from "../imgs/Vector.svg";
import { ThemeContext, UserContext } from "../App";
import UserNavigationPanel from "./user-navigation.component";
import ContactUs from "./contact";
import { storeInSession } from "../common/session";
import { AlignJustify } from "react-feather";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

import logo from "../imgs/Logo_Landing.png";
import lightLogo from "../imgs/lightLogo.png";

const BlogNavbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleContactForm = () => {
    setIsContactOpen(!isContactOpen);
  };

  const {
    userAuth,
    userAuth: {
      accessToken,
      profile_img,
      new_notifications,
      isAdmin,
      isBlogger,
    },
    setUserAuth,
  } = useContext(UserContext);

  const handleUserNavPanel = () => {
    setUserNavPanel((currentValue) => !currentValue);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 500);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`navbar sticky ${
          theme == "light"
            ? "bg-white"
            : "bg-[linear-gradient(to_right,_#211258,_#2d24a8,_#191b70,_#080824)]"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between p-4  text-white">
          <Link className="flex items-center" to="/blog">
            <img
              className="w-11 h-11 mr-2"
              src={theme == "light" ? lightLogo : logo}
              alt="Spark25 logo"
            />
            <span
              className={`text-3xl font-bold ${
                theme == "light" ? "text-black" : "text-white"
              }`}
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
              <FaSun className="text-xl text-black" />
            ) : (
              <FaMoon className="text-xl text-white" />
            )}
          </button>

          <div
                    className="relative md:hidden"
                    onClick={handleUserNavPanel}
                    onBlur={handleBlur}
                  >
                    <button className="w-12 h-12 mt-1">
                      <img
                        src={profile_img}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </button>

                    {userNavPanel && <UserNavigationPanel /> }
                  </div>

          {/* Hamburger icon for mobile */}
          <button
            className={`md:hidden ${
              theme == "light" ? "text-black " : "text-white "
            }`}
            onClick={toggleMenu}
          >
            <AlignJustify className="w-8 h-8" />
          </button>

          {/* Menu items for larger screens */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {isAdmin ? (
              <>
              <Link to="/editor" className="link">
                <i className="fi fi-rr-file-edit"></i>
                <p>Write</p>
              </Link>
              <div
                    className="relative"
                    onClick={handleUserNavPanel}
                    onBlur={handleBlur}
                  >
                    <button className="w-12 h-12 mt-1">
                      <img
                        src={profile_img}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </button>

                    {userNavPanel && <UserNavigationPanel /> }
                  </div>
              </>
            ) : (
              ""
            )}

            <Link
              to="/"
              className={`${
                theme == "light" ? "text-black" : "text-white"
              } text-xl px-2`}
            >
              Home
            </Link>
            {/* <Link className="whitespace-nowrap rounded-full py-2 px-6 text-xl border-2 capitalize hover:bg-opacity-80" to="/blog/signin">
            Sign In
            </Link>
            <Link className="btn-light py-2 hidden md:block" to="/blog/signup">
            Sign Up
            </Link> */}

            {/* Contact Us button */}
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
                <FaSun className="text-xl text-black" />
              ) : (
                <FaMoon className="text-xl text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu (shown on small screens) */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className={`absolute top-20 left-0 w-full ${
                theme == "light"
                  ? "bg-white"
                  : "bg-[linear-gradient(to_right,_#211258,_#2d24a8,_#191b70,_#080824)]"
              }  py-4 px-8 text-center transition-transform duration-300 ease-in-out transform`}
            >
              <Link
                to="/"
                className={`block ${
                  theme == "light" ? "text-black" : "text-white"
                } py-2`}
                onClick={toggleMenu}
              >
                Home
              </Link>
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
              {isAdmin && (
                <>
                  <Link
                    to="/editor"
                    className="block text-white py-2"
                    onClick={toggleMenu}
                  >
                    Write
                  </Link>
                  
                </>
              )}
              {/* <Link to="/blog/signin" className="block text-white py-2" onClick={toggleMenu}>
              Sign In
              </Link>
              <Link to="/blog/signup" className="block text-white py-2" onClick={toggleMenu}>
              Sign Up
              </Link> */}
            </div>
          )}
        </nav>
      </div>
      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />

      <Outlet />
    </>
  );
};

export default BlogNavbar;
