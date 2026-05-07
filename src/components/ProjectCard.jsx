import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  category,
  description,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">

      {/* Image Container */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
            View Project
            <FaArrowRight />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-orange-500 transition">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Bottom Section */}
        <div className="mt-6 flex items-center justify-between">

          <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Read More
            <FaArrowRight className="text-sm" />
          </button>

          <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;