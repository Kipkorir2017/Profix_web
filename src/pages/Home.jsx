import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
// import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div className="bg-white">

      
      <section>
       < Hero />
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            subtitle="Our Work"
            title="Recent Projects"
            description="A showcase of our completed mechanical and industrial engineering projects."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* You will pass real props here */}
            <ProjectCard />
          </div>

        </div>
      </section>

      {/* Service */}
      <section className="py-24  mb-20">
        <div className="max-w-7xl mx-auto px-6">

          <ServiceCard />

        </div>
      </section>

    </div>
  );
};

export default Home;