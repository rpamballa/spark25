import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlignJustify, X } from "react-feather";

import ContactUs from "./contact";

import logoMark from "../imgs/lightLogo.png";

/**
 * Marketing-site header for the Brutalist Grid design: monospace nav in
 * bracket notation, hairline rules, and a solid CTA block. Deliberately
 * separate from the blog's Header, which keeps its own theme toggle.
 */
const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactForm = () => setIsContactOpen((open) => !open);

  const openContact = () => {
    setIsMenuOpen(false);
    setIsContactOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#eceae4] border-b border-[#101010]">
        <div className="flex items-center justify-between px-5 md:px-12 py-3.5">
          <Link to="/" className="flex items-center gap-2.5 text-[#101010]">
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
            />
            <span className="font-[900] text-[24px] md:text-[28px] tracking-[-1px] leading-none">
              SPARK25
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 spark-mono text-[11px] tracking-[1.5px]">
            {!isHome && (
              <Link to="/" className="text-[#101010] hover:text-[#4f2fe0]">
                [ HOME ]
              </Link>
            )}
            <Link to="/#services" className="text-[#101010] hover:text-[#4f2fe0]">
              [ SERVICES ]
            </Link>
            <Link to="/about" className="text-[#101010] hover:text-[#4f2fe0]">
              [ ABOUT ]
            </Link>
            <button
              type="button"
              onClick={toggleContactForm}
              className="bg-[#101010] text-[#eceae4] px-3 py-1.5 hover:bg-[#4f2fe0] transition-colors"
            >
              [ BOOK A GROWTH CALL <span className="spark-blink">_</span> ]
            </button>
          </nav>

          <button
            type="button"
            className="md:hidden text-[#101010]"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <AlignJustify className="w-7 h-7" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[#101010] px-5 py-4 flex flex-col gap-3 spark-mono text-[12px] tracking-[1.5px] bg-[#eceae4]">
            {!isHome && (
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-[#101010]"
              >
                [ HOME ]
              </Link>
            )}
            <Link
              to="/#services"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-[#101010]"
            >
              [ SERVICES ]
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-[#101010]"
            >
              [ ABOUT ]
            </Link>
            <button
              type="button"
              onClick={openContact}
              className="bg-[#101010] text-[#eceae4] px-3 py-2.5 text-left"
            >
              [ BOOK A GROWTH CALL <span className="spark-blink">_</span> ]
            </button>
          </div>
        )}
      </header>

      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />
    </>
  );
};

export default SiteHeader;
