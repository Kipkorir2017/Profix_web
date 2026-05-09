import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ image, title, category, description }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500">

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0F172A]/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition shadow-lg">
            View Project
            <FaArrowRight />
          </button>

        </div>

        {/* CATEGORY BADGE (IMPROVED) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0F172A] px-4 py-2 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
          {category}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* TITLE */}
        <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-orange-500 transition leading-snug">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-gray-600 leading-relaxed text-sm">
          {description}
        </p>

        {/* DIVIDER */}
        <div className="mt-5 w-12 h-[2px] bg-orange-500 rounded-full"></div>

        {/* FOOTER ACTION */}
        <div className="mt-6 flex items-center justify-between">

          <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
            Read More
            <FaArrowRight className="text-sm" />
          </button>

          {/* SMALL INDICATOR DOTS */}
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;