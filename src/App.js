import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Components

import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";

// Pages
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import SpareParts from "./pages/SpareParts";
import Contact from "./pages/Contact";

// Home Page
function Home() {
  return (
    <>
      

      <section className="py-16 px-6">
        <SectionTitle
          title="Our Services"
          subtitle="What we provide"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <SectionTitle
          title="Recent Projects"
          subtitle="Some of our completed work"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Shared Layout */}
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;