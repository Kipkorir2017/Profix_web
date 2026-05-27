import {
  FaFireAlt,
  FaShieldAlt,
  FaBell,
  FaSnowflake,
  FaFan,
  FaTemperatureLow,
  FaWarehouse,
  FaDraftingCompass,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import fireexting from "../assets/images/fireexting.png"
import firealarm from "../assets/images/fireAlarm2.jpg"
import firehydrant from '../assets/images/firehydr.jpg'
import sav from "../assets/images/Sav.jpg"
import ventilator from "../assets/images/ventilators.jpg"
import welding from "../assets/images/weldin2.jpeg"
import plumbingac from  "../assets/images/PlumbingAcc.png.jpeg"
import coolingtower from "../assets/images/Coolingtowers.jpg"
import hvac from "../assets/images/HvacIn.jpg"
const projects = [
  {
    id: 1,
    title: "Fire Extinguisher Supply & Installation",
    category: "Fire Protection",
    description:
      "Professional supply and installation of certified fire extinguishers for commercial and industrial premises.",
    icon: <FaShieldAlt />,
    image: fireexting,
  },

  {
    id: 2,
    title: "Fire Alarm System Installation",
    category: "Safety Systems",
    description:
      "Modern fire alarm and detection system installation for enhanced safety and compliance.",
    icon: <FaBell />,
    image: firealarm,
  },

  {
    id: 3,
    title: "Fire Hydrant System Installation",
    category: "Fire Protection Systems",
    description:
      "Complete fire hydrant system installation including pumps, piping, hose reels, hydrant valves, and water storage systems for industrial and commercial safety.",
    icon: <FaFireAlt />,
    image: firehydrant,
  },

  {
    id: 4,
    title: "HVAC System Design & Installation",
    category: "HVAC Engineering",
    description:
      "Complete HVAC planning, ducting, and installation solutions for industrial and commercial buildings.",
    icon: <FaFan />,
    image: hvac,
  },

  {
    id: 5,
    title: "Air Conditioner Supply,Installation & Maintenance",
    category: "Air Conditioning",
    description:
      "Installation of energy-efficient air conditioning systems for offices, homes, and commercial spaces.",
    icon: <FaSnowflake />,
    image: sav,
  },


  {
    id: 7,
    title: "Ventilation Systems Installation",
    category: "Ventilation",
    description:
      "Efficient ventilation and airflow system installation for healthy and safe indoor environments.",
    icon: <FaFan />,
    image: ventilator,
  },


 {
    id: 9,
    title: "Cooling Tower Installation & Maintenance",
    category: "HVAC Systems",
    description:
      "Design, installation, servicing, and maintenance of industrial cooling towers for efficient heat rejection in HVAC and industrial systems.",
    icon: <FaWarehouse />,
    image: coolingtower,
  },

  {
    id: 10,
    title: "Plumbing Accessories, installation and Maintenance",
    category: "Plumbing",
    description:
      "Professional plumbing services including piping, drainage systems, water supply installation, and maintenance.",
    icon: <FaWrench />,
    image: plumbingac,
  },

  {
    id: 11,
    title: "Welding & Fabrication",
    category: "Metal Works",
    description:
      "Custom welding and metal fabrication solutions for industrial, commercial, and structural projects.",
    icon: <FaTools />,
    image: welding,
  },
];

const galleryImages = [
  firehydrant,
  sav,
  ventilator,
  coolingtower,
  hvac,
  welding,
];

const Projects = () => {
  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Our <span className="text-orange-500">Projects</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          We deliver professional fire protection, HVAC, refrigeration,
          ventilation, plumbing, welding, fabrication, and mechanical
          engineering solutions with quality, safety, and reliability.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl mb-5">
                  {project.icon}
                </div>

                {/* Category */}
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0F172A] mt-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Project <span className="text-orange-500">Gallery</span>
            </h2>

            <p className="text-gray-600 mt-4">
              Explore some of our completed HVAC, refrigeration, plumbing,
              welding, fabrication, and fire protection projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Project Gallery ${index + 1}`}
                  className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;