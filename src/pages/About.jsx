import { FaTools, FaIndustry, FaHandshake, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-28">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center py-16">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          About <span className="text-orange-500">MECHTECH</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          We are a trusted mechanical and industrial solutions company
          specializing in machinery repair, spare parts supply, and
          engineering services for businesses and individuals.
        </p>

      </section>

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To deliver reliable, efficient, and affordable mechanical
            solutions that keep industries, vehicles, and equipment running
            smoothly without downtime.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a leading mechanical engineering and spare parts
            provider across Africa, known for quality, trust, and innovation.
          </p>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0F172A] py-20 text-white mb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div className="bg-[#1E293B] p-6 rounded-2xl">
              <FaTools className="text-orange-500 text-3xl mx-auto" />
              <h3 className="mt-4 font-bold">Expert Technicians</h3>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">
              <FaIndustry className="text-orange-500 text-3xl mx-auto" />
              <h3 className="mt-4 font-bold">Industrial Grade Quality</h3>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">
              <FaHandshake className="text-orange-500 text-3xl mx-auto" />
              <h3 className="mt-4 font-bold">Trusted Partnerships</h3>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">
              <FaBolt className="text-orange-500 text-3xl mx-auto" />
              <h3 className="mt-4 font-bold">Fast Delivery</h3>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default About;