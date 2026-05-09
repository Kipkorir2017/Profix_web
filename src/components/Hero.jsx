import { FaTools, FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-[#0F172A] text-white min-h-[90vh] flex items-center">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full text-sm mb-6">
            <FaTools className="text-orange-500" />
            Mechanical & Industrial Solutions
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Reliable <span className="text-orange-500">Mechanical</span> &
            Industrial Engineering Services
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            We provide spare parts, machinery repair, industrial maintenance,
            and engineering solutions for construction machines, motorcycles,
            and factory equipment.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
              Get Quote
              <FaArrowRight />
            </button>

            <a href="/contact"><button className="border border-white/30 hover:border-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
              <FaPhoneAlt />
              Contact Us
            </button></a>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-2xl font-bold text-orange-500">500+</h3>
              <p className="text-sm text-gray-300 mt-1">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">200+</h3>
              <p className="text-sm text-gray-300 mt-1">Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">10+</h3>
              <p className="text-sm text-gray-300 mt-1">Years</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hidden md:block">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop"
              alt="Engineering"
              className="rounded-2xl shadow-2xl"
            />

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#0F172A] p-5 rounded-xl shadow-xl">
              <p className="font-bold">24/7 Support</p>
              <p className="text-sm text-gray-600">Fast response service</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;