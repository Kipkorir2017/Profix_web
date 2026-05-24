import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTools, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaTools className="text-orange-500 text-2xl" />
          <h1 className="text-2xl font-bold text-white">SAVIAN E.A LTD</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/spare-parts" className={linkClass}>Spare Parts</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU (BLOCK + RIGHT ALIGNED) */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] text-white px-6 pb-4">

          <div className="flex flex-col items-end space-y-3 text-white">

            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>

            <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>

            <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>

            <NavLink to="/spare-parts" className={linkClass} onClick={() => setMenuOpen(false)}>
              Spare Parts
            </NavLink>

            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>

          </div>

          {/* CTA */}
          <div className="flex justify-end mt-4">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Get Quote
              </button>
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;