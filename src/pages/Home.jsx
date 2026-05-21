import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section>
        <Hero />
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <SectionTitle
            subtitle="Who We Are"
            title="Mechanical, HVAC, Fire Protection & Spare Parts Experts"
            description="We are a trusted engineering company delivering reliable mechanical services, HVAC systems, refrigeration solutions, fire protection systems, and genuine spare parts supply for industrial, commercial, and residential clients."
          />

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="What We Do"
            title="Our Core Services"
            description="We provide complete engineering solutions including installation, maintenance, fabrication, fire safety systems, HVAC, refrigeration, and spare parts supply."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>

        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="Our Work"
            title="Recent Projects"
            description="A showcase of our completed HVAC, fire protection, refrigeration, mechanical engineering, and industrial projects."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <SectionTitle
            subtitle="Why Choose Us"
            title="Reliable Engineering You Can Trust"
            description="We combine experience, innovation, and quality workmanship to deliver safe, efficient, and long-lasting engineering solutions."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Quality Workmanship
              </h3>
              <p className="mt-3 text-gray-600">
                We deliver precision engineering with strict quality standards.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Fast Response
              </h3>
              <p className="mt-3 text-gray-600">
                Quick service delivery for breakdowns, repairs, and installations.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Spare Parts Availability
              </h3>
              <p className="mt-3 text-gray-600">
                Reliable supply of genuine mechanical and industrial spare parts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-[#111C33] text-white mb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Need Engineering or Spare Parts Support?
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Contact us today for HVAC systems, fire protection installation, refrigeration solutions, mechanical repairs, or spare parts supply.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Get a Free Quote
          </a>

        </div>
      </section>

    </div>
  );
};

export default Home;