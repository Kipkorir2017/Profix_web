import {
  FaFireAlt,
  FaShieldAlt,
  FaBell,
  FaSnowflake,
  FaFan,
  FaTemperatureLow,
  FaWarehouse,
  FaDraftingCompass,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Fire Extinguisher Supply & Installation",
    category: "Fire Protection",
    description:
      "Professional supply and installation of certified fire extinguishers for commercial and industrial premises.",
    icon: <FaShieldAlt />,
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Fire Alarm System Installation",
    category: "Safety Systems",
    description:
      "Modern fire alarm and detection system installation for enhanced safety and compliance.",
    icon: <FaBell />,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "HVAC System Design & Installation",
    category: "HVAC Engineering",
    description:
      "Complete HVAC planning, ducting, and installation solutions for industrial and commercial buildings.",
    icon: <FaFan />,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Air Conditioner Supply & Installation",
    category: "Air Conditioning",
    description:
      "Installation of energy-efficient air conditioning systems for offices, homes, and commercial spaces.",
    icon: <FaSnowflake />,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "AC Repair & Maintenance",
    category: "Maintenance",
    description:
      "Professional servicing, troubleshooting, and preventive maintenance for all AC systems.",
    icon: <FaTemperatureLow />,
    image:
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Ventilation Systems Installation",
    category: "Ventilation",
    description:
      "Efficient ventilation and airflow system installation for healthy and safe indoor environments.",
    icon: <FaFan />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    title: "Ducting Fabrication & Installation",
    category: "Fabrication",
    description:
      "Custom duct fabrication and HVAC duct installation tailored for industrial applications.",
    icon: <FaDraftingCompass />,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    title: "Cold Room Installation & Servicing",
    category: "Refrigeration",
    description:
      "Design, installation, and maintenance of cold rooms and temperature-controlled storage systems.",
    icon: <FaWarehouse />,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
  },
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
          ventilation, and mechanical engineering solutions with quality,
          safety, and reliability.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              Explore some of our completed HVAC, refrigeration, and fire
              protection projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="HVAC Installation"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1200&auto=format&fit=crop"
              alt="Fire Extinguisher Installation"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop"
              alt="Cold Room Installation"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;