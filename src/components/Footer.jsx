import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSnowflake,
  FaShieldAlt,
  FaTools,
  FaWarehouse,
  FaFan,
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
            Savian<span className="text-orange-500"> E.A LTD</span>
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Trusted mechanical, HVAC, refrigeration, fire protection, and
            spare parts solutions company delivering reliable engineering,
            installation, maintenance, and industrial support services for
            residential, commercial, and industrial clients.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition duration-300"
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
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/projects", label: "Projects" },
              { path: "/spare-parts", label: "Spare Parts" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-orange-500">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-300">
            {[
              {
                icon: <FaSnowflake className="text-orange-500" />,
                text: "Air Conditioning Installation",
              },
              {
                icon: <FaFan className="text-orange-500" />,
                text: "HVAC Systems",
              },
              {
                icon: <FaShieldAlt className="text-orange-500" />,
                text: "Fire Protection Systems",
              },
              {
                icon: <FaTools className="text-orange-500" />,
                text: "Mechanical Repairs",
              },
              {
                icon: <FaWarehouse className="text-orange-500" />,
                text: "Cold Room Installation",
              },
              {
                icon: <FaTools className="text-orange-500" />,
                text: "Spare Parts Supply",
              },
              {
                icon: <FaFan className="text-orange-500" />,
                text: "Ventilation Systems",
              },
              {
                icon: <FaShieldAlt className="text-orange-500" />,
                text: "Fire Alarm Installation",
              },
            ].map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-orange-500 transition duration-300 cursor-pointer"
              >
                {service.icon}
                <span>{service.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-orange-500">
            Contact Info
          </h3>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
              <p>
                Commercial House, 3rd Floor, Commercial Street,
                Industrial Area, Nairobi, Kenya
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500 flex-shrink-0" />
              <a
                href="tel:+254700000000"
                className="hover:text-orange-500 transition duration-300"
              >
                +254 700 000 000
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 flex-shrink-0" />
              <a
                href="mailto:info@savianeastafrica.com"
                className="hover:text-orange-500 transition duration-300"
              >
                info@savianeastafrica.com
              </a>
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
            © {new Date().getFullYear()} Savian E.A LTD.
            All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <Link
              to="/privacy-policy"
              className="hover:text-orange-500 transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="hover:text-orange-500 transition duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;