import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import hakimXLogo from "../../data/hakimXLogo.svg";

const Header = () => {
  // State to control the visibility of the menu on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Change from false to null

  // Toggle the menu visibility
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
  // bg-teal-400
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-stone-700 text-white shadow">
      <div className="flex items-center justify-between">
        <img src={hakimXLogo} alt="HakimX Logo" className="h-20 w-20" />

        <button
          ref={menuRef}
          className="block sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen} // Added for accessibility
          aria-controls="mobile-menu" // Added for accessibility
        >
          <svg
            className="h-6 w-6"
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

        {/* Navigation Links */}
        <nav
          id="mobile-menu" // Added an id for better accessibility
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 top-full w-full bg-teal-600 transition-all duration-300 ease-in-out sm:static sm:flex sm:justify-end sm:space-x-4 sm:bg-transparent`} // Added transition
        >
          <Link
            to="/"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            Portfolio
          </Link>
          <Link
            to="/testimonials"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            Testimonials
          </Link>
          <Link
            to="/ourteam"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            Our Team
          </Link>
          <Link
            to="/contacts"
            className="block px-5 py-2 text-white hover:bg-gray-700 sm:inline-block"
          >
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
