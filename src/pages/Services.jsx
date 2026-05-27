import {
  FaTruck,
  FaDraftingCompass,
  FaFireAlt,
  FaSnowflake,
  FaFan,
  FaTemperatureLow,
  FaWarehouse,
  FaShieldAlt,
  FaBell,
} from "react-icons/fa";

import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const services = [
    /* FIRE PROTECTION SERVICES */

    {
      icon: FaShieldAlt,
      title: "Fire Extinguisher Supply & Installation",
      description:
        "Supply, installation, and positioning of certified fire extinguishers for industrial and commercial facilities.",
    },

    {
      icon: FaFireAlt,
      title: "Fire Extinguisher Inspection & Refilling",
      description:
        "Routine inspection, servicing, pressure testing, and refilling of fire extinguishers.",
    },

    {
      icon: FaBell,
      title: "Fire Alarm Systems Installation",
      description:
        "Professional installation of modern fire alarm and detection systems for enhanced safety compliance.",
    },

    {
      icon: FaShieldAlt,
      title: "Fire Hose Reel & Hydrant Systems",
      description:
        "Installation and maintenance of fire hose reels, hydrants, and complete fire protection systems.",
    },

    /* HVAC & AIR CONDITIONING */

    {
      icon: FaSnowflake,
      title: "Air Conditioner Supply & Installation",
      description:
        "Supply and installation of energy-efficient air conditioning systems for residential and commercial spaces.",
    },

    {
      icon: FaFan,
      title: "HVAC System Design & Installation",
      description:
        "Complete HVAC design, planning, and installation tailored to industrial and commercial requirements.",
    },

    {
      icon: FaTemperatureLow,
      title: "AC Repair & Maintenance",
      description:
        "Reliable troubleshooting, servicing, and preventive maintenance for all AC system types.",
    },

    {
      icon: FaFan,
      title: "Ventilation Systems Installation",
      description:
        "Installation of high-performance ventilation and airflow systems for healthy indoor environments.",
    },

    {
      icon: FaDraftingCompass,
      title: "Ducting Fabrication & Installation",
      description:
        "Custom duct fabrication and installation solutions for HVAC and industrial ventilation systems.",
    },

    {
      icon: FaSnowflake,
      title: "Refrigeration Services",
      description:
        "Industrial and commercial refrigeration installation, servicing, and repair solutions.",
    },

    {
      icon: FaWarehouse,
      title: "Cold Room Installation & Servicing",
      description:
        "Design, installation, and maintenance of cold rooms and temperature-controlled storage facilities.",
    },
    {
      icon: FaTruck,
      title: "Spare Parts Supply",
      description: "Reliable supply of industrial and mechanical spare parts.",
    },
    // {
    //   icon: FaTools,
    //   title: "Mechanical Repairs",
    //   description:
    //     "Professional repair of industrial machines and mechanical systems.",
    // },

    // {
    //   icon: FaWrench,
    //   title: "Welding & Fabrication",
    //   description:
    //     "High-quality welding and steel fabrication for industrial use.",
    // },

    // {
    //   icon: FaCogs,
    //   title: "Lathe Machine Operations",
    //   description:
    //     "Precision machining and lathe services for metal components.",
    // },

    // {
    //   icon: FaIndustry,
    //   title: "Industrial Maintenance",
    //   description:
    //     "Preventive and corrective maintenance for industrial equipment.",
    // },

    // {
    //   icon: FaHammer,
    //   title: "Heavy Fabrication",
    //   description:
    //     "Construction of heavy-duty metal structures and frameworks.",
    // },

    // {
    //   icon: FaTruck,
    //   title: "Spare Parts Supply",
    //   description:
    //     "Reliable supply of industrial and mechanical spare parts.",
    // },

    // {
    //   icon: FaCut,
    //   title: "CNC Fiber Laser Cutting",
    //   description:
    //     "Precision CNC laser cutting services for sheet metal and industrial fabrication projects.",
    // },

    // {
    //   icon: FaDraftingCompass,
    //   title: "CNC Sheet Metal Bending",
    //   description:
    //     "Accurate CNC bending solutions for custom metal fabrication and industrial applications.",
    // },

    // {
    //   icon: FaFireAlt,
    //   title: "ARC, MIG, TIG & Spot Welding",
    //   description:
    //     "Professional welding services for stainless steel, aluminum, and heavy-duty fabrication.",
    // },

    // {
    //   icon: FaPaintRoller,
    //   title: "Powder Coating Services",
    //   description:
    //     "Durable and high-quality powder coating finishes for industrial and commercial products.",
    // },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Our Services"
          title="Industrial Mechanical Solutions"
          description="We provide complete mechanical engineering, HVAC, fire protection, fabrication, and industrial maintenance services tailored for performance, safety, reliability, and durability."
        />

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
