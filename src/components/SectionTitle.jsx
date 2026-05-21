const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
}) => {
  return (
    <div
      className={`max-w-4xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}
      {subtitle && (
        <p className="text-orange-500 font-semibold uppercase tracking-[4px] text-sm md:text-base">
          {subtitle}
        </p>
      )}

      {/* Title */}
      {title && (
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
          {title}
        </h2>
      )}

      {/* Decorative line */}
      <div
        className={`mt-5 h-[3px] w-16 bg-orange-500 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      ></div>

      {/* Description */}
      {description && (
        <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;