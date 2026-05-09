import {
  FaTools,
  FaWrench,
  FaCogs,
  FaIndustry,
  FaHammer,
  FaTruck,
} from "react-icons/fa";

import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const services = [
    {
      icon: FaTools,
      title: "Mechanical Repairs",
      description:
        "Professional repair of industrial machines and mechanical systems.",
    },
    {
      icon: FaWrench,
      title: "Welding & Fabrication",
      description:
        "High-quality welding and steel fabrication for industrial use.",
    },
    {
      icon: FaCogs,
      title: "Lathe Machine Operations",
      description:
        "Precision machining and lathe services for metal components.",
    },
    {
      icon: FaIndustry,
      title: "Industrial Maintenance",
      description:
        "Preventive and corrective maintenance for industrial equipment.",
    },
    {
      icon: FaHammer,
      title: "Heavy Fabrication",
      description:
        "Construction of heavy-duty metal structures and frameworks.",
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
          description="We provide complete mechanical engineering services tailored for industrial performance, reliability, and durability."
        />

        {/* Grid */}
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