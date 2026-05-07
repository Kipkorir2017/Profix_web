import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 hover:border-orange-200">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0F172A] text-orange-500 text-2xl group-hover:bg-orange-500 group-hover:text-white transition">
        {Icon && <Icon />}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-[#0F172A] group-hover:text-orange-500 transition">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Bottom Action */}
      <div className="mt-6 flex items-center justify-between">

        <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Learn More
          <FaArrowRight className="text-sm" />
        </button>

        <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ServiceCard;