import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>

          <h2 className="text-3xl font-extrabold">
            Pro<span className="text-orange-500">Fix</span>
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Professional mechanical engineering solutions specializing in
            welding, fabrication, lathe machining, industrial repairs,
            spare parts supply, and CNC services.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-bold mb-6 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-orange-500 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-orange-500 transition"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/spare-parts"
                className="hover:text-orange-500 transition"
              >
                Spare Parts
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-bold mb-6 text-orange-500">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-300">

            {/* Existing Services */}
            <li className="hover:text-orange-500 transition cursor-pointer">
              Welding & Fabrication
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Lathe Machine Operations
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Industrial Repairs
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Spare Parts Supply
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Machine Maintenance
            </li>

            {/* New Services */}
            <li className="hover:text-orange-500 transition cursor-pointer">
              CNC Fiber Laser Cutting
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              CNC Sheet Metal Bending
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              ARC, MIG, TIG & Spot Welding
            </li>

            <li className="hover:text-orange-500 transition cursor-pointer">
              Powder Coating Services
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>

          <h3 className="text-xl font-bold mb-6 text-orange-500">
            Contact Info
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />

              <p>Nairobi, Kenya</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500" />

              <p>+254 700 000 000</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500" />

              <p>info@mechtech.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Working Hours
              </h4>

              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} MECHTECH Industrial Mechanical
            Solutions. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;