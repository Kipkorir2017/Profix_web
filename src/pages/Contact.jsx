import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28">

      {/* HERO */}
      <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Get a <span className="text-orange-500">Quote</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Need fabrication, welding, CNC cutting, machine maintenance,
            or spare parts supply? Contact our team today and receive
            professional industrial engineering support.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>

          <div className="max-w-lg">

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
              Let’s Discuss Your Industrial Project
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Whether you need industrial fabrication, machine repairs,
              welding solutions, or spare parts supply, our team is ready
              to assist you with reliable engineering services.
            </p>

          </div>

          {/* INFO CARDS */}
          <div className="mt-10 space-y-6">

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Phone Number
                </h3>

                <p className="mt-2 text-gray-600">
                  +254 700 000 000
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Email Address
                </h3>

                <p className="mt-2 text-gray-600">
                  info@profix.com
                </p>
              </div>

            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Our Location
                </h3>

                <p className="mt-2 text-gray-600">
                  Nairobi, Kenya
                </p>
              </div>

            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl">
                <FaClock />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Working Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday - Saturday
                </p>

                <p className="text-gray-600">
                  8:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">

          <div>

            <h2 className="text-3xl font-bold text-[#0F172A]">
              Request Quote
            </h2>

            <p className="mt-3 text-gray-600">
              Fill in your project details and our team will get back to you.
            </p>

          </div>

          <form className="mt-8 space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="+254 700 000 000"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Service Needed
              </label>

              <select
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition"
              >
                <option>Select Service</option>

                <option>Mechanical Repairs</option>

                <option>Welding & Fabrication</option>

                <option>CNC Fiber Laser Cutting</option>

                <option>CNC Sheet Metal Bending</option>

                <option>Industrial Maintenance</option>

                <option>Spare Parts Supply</option>

                <option>Powder Coating Services</option>

              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Project Details
              </label>

              <textarea
                rows="5"
                placeholder="Describe your project requirements..."
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-orange-500 transition resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-orange-200"
              >
                Submit Request
              </button>

              <a
                href="https://wa.me/254725427016"
                target="_blank"
                rel="noreferrer"
                className="flex-1 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;