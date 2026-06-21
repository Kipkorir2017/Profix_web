import { useState } from "react";
import firesupp from "../assets/images/Firesuppression.jpg";
import ventilator from "../assets/images/ventilators.jpg";
import cooling from "../assets/images/cooling.jpg"
import firehydrant from "../assets/images/Firehydrant.jpg";
import firesuppression from "../assets/images/firesuppre.jpg"
const ProjectCard = ({
  images = [firesupp, ventilator,cooling,firehydrant,firesuppression],
  title,
  category,
  description,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500">

      {/* MAIN IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={images[activeImage]}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0F172A] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          {category}
        </div>

      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title}-${index}`}
              onClick={() => setActiveImage(index)}
              className={`h-16 w-full object-cover rounded-lg cursor-pointer border-2 transition ${
                activeImage === index
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
            />
          ))}

        </div>
      )}

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

        {/* DECORATIVE LINE */}
        <div className="mt-5 w-12 h-[2px] bg-orange-500 rounded-full"></div>

      </div>
    </div>
  );
};

export default ProjectCard;