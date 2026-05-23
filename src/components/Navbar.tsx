import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVLINKS } from "../constants";
import { StarHoverLink } from "./StarHoverLink";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("/");

  const toggleMobileMenu = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="fixed w-full top-0 left-0 text-white flex flex-col justify-between items-center z-50 p-3 md:p-9">
        <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:rounded-full lg:shadow-lg">
          {/* NaSA logo */}
          <img
            src="/assets/images/NASA-logo.png"
            alt="NASA Logo"
            width={80}
            height={22}
          />

          {/* Desktop Links */}
          <ul className="hidden gap-6 overflow-hidden lg:flex">
            {NAVLINKS.map((link, i: number) => (
              <li key={i}>
                <StarHoverLink
                  href={link.href}
                  isActive={activeSection === link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.href);
                  }}
                  className={i !== 0 ? "border-l-2 border-neutral-300/20" : ""}
                >
                  {link.text}
                </StarHoverLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer text-2xl lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`w-full backdrop-blur-lg transition-opacity duration-200 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          {NAVLINKS.map((link, i: number) => (
            <li key={i}>
              <a
                href={link.href}
                className="block p-4 cursor-pointer"
                onClick={(e) => toggleMobileMenu(e)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
