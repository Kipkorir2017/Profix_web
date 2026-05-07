const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}
      {subtitle && (
        <p className="text-orange-500 font-semibold uppercase tracking-widest">
          {subtitle}
        </p>
      )}

      {/* Title */}
      {title && (
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="mt-5 text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;