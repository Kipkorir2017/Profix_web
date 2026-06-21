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

import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const services = [
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
      description:
        "Reliable supply of industrial and mechanical spare parts.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Our Services"
          title="Industrial Mechanical Solutions"
          description="We provide complete mechanical engineering, HVAC, fire protection, welding,fabrication, and industrial maintenance services tailored for performance, safety, reliability, and durability."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  <Icon className="text-3xl text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
