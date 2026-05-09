import {
  FaIndustry,
  FaCogs,
  FaTools,
  FaWrench,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Industrial Machine Repair",
    category: "Maintenance",
    description:
      "Complete servicing and repair of heavy industrial machinery for improved efficiency.",
    icon: <FaIndustry />,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Hydraulic System Upgrade",
    category: "Engineering",
    description:
      "Modern hydraulic system installation designed for better operational reliability.",
    icon: <FaCogs />,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Factory Equipment Installation",
    category: "Installation",
    description:
      "Professional installation and calibration of factory equipment.",
    icon: <FaTools />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Generator Maintenance Project",
    category: "Mechanical",
    description:
      "Preventive maintenance and component replacement for generators.",
    icon: <FaWrench />,
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
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
          We deliver trusted industrial, engineering, and mechanical
          solutions with precision, innovation, and reliability.
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
              Explore some of our completed engineering and industrial work.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;