import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import hakimXLogo from "../../data/hakimXLogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 h-auto w-full bg-stone-700 py-0 text-white shadow sm:py-2">
      <div className="flex items-center justify-between">
        <img src={hakimXLogo} alt="HakimX Logo" className="h-auto w-20 py-0" />

        <button
          className="block sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="mr-4 h-6 w-8 p-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <nav
          ref={menuRef}
          id="mobile-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full bg-teal-600 py-0 transition-all duration-300 ease-in-out sm:flex sm:justify-end sm:space-x-4 sm:bg-transparent`}
        >
          <Link
            to="/"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)} // Close menu after click
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/testimonials"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/ourteam"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/contacts"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
