import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import firehydrant from "../assets/images/firehydr.jpg";
import welding from "../assets/images/weldin2.jpeg";
import firesuppress from "../assets/images/Firesuppression.jpg"
import refrig from "../assets/images/refrig.png"

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  images = [firehydrant, welding,firesuppress,refrig],
  onClick,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

 
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 hover:border-orange-200">
      {/* Image Slider */}
      <div className="h-56 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0F172A] text-orange-500 text-2xl group-hover:bg-orange-500 group-hover:text-white transition">
          {Icon && <Icon />}
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-[#0F172A] group-hover:text-orange-500 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>

        {/* Button */}
        <div className="mt-6 flex items-center justify-between">
          <Link to="/projects">
          <button
            onClick={onClick}
            className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Learn More
            <FaArrowRight className="text-sm" />
          </button>
          </Link>

          <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
