import {
  FaTools,
  FaCogs,
  FaTractor,
  FaMotorcycle,
  FaSnowflake,
  FaIndustry,
  FaBolt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import motorcycle from "../assets/images/motorcycle.png"
import piston from "../assets/images/piston.jpg"
import general from "../assets/images/general.jpg"
import refrig from "../assets/images/refrig.png"
import motor2 from "../assets/images/motor.jpg"

const spareParts = [

  {
    id: 2,
    name: "Motorcycle Spare Parts",
    description:
      "Reliable motorcycle engines, chains, brakes, and electrical components for all models.",
    icon: <FaMotorcycle />,
    image: motorcycle,
      
  },

  {
    id: 3,
    name: "Industrial Machine Parts",
    description:
      "High-performance components for factories, production lines, and heavy industrial machines.",
    icon: <FaIndustry />,
    image:motor2,
      
  },

  {
    id: 4,
    name: "Refrigeration Parts",
    description:
      "Compressors, cooling systems, and gas components for refrigerators and cold rooms.",
    icon: <FaSnowflake />,
    image: refrig,
      
  },

  

  {
    id: 6,
    name: "General Tools & Equipment",
    description:
      "Hand tools, power tools, and workshop equipment for repair and maintenance tasks.",
    icon: <FaTools />,
    image: general,
      
  },

  {
    id: 7,
    name: "Engine & Mechanical Systems",
    description:
      "Pistons, gear systems, and engine components for multiple mechanical applications.",
    icon: <FaCogs />,
    image: piston,
     
  },
];

const SpareParts = () => {
  return (
    <div className="bg-white min-h-screen pt-28">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Spare <span className="text-orange-500">Parts</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          We supply high-quality spare parts for construction machines,
          motorcycles, industrial systems, refrigeration units, and general
          mechanical tools.
        </p>

      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {spareParts.map((part) => (
            <div
              key={part.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl mb-5">
                  {part.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {part.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {part.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Need Any Spare Part?
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Whether it’s construction, motorcycle, industrial, or home
            equipment — we’ve got the right solution for you.
          </p>

          <Link to="/contact">
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition">
              Contact Us
            </button>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default SpareParts;