import { NavLink } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaTools className="text-orange-500 text-2xl" />

          <h1 className="text-2xl font-bold text-white">
            Pro<span className="text-orange-500">Fix</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/spare-parts"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              Spare Parts
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CTA */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;