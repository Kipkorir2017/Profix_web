import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-28">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center py-16">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Contact <span className="text-orange-500">Us</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Need mechanical support, spare parts, or engineering services?
          Reach out to us anytime.
        </p>

      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaPhone className="text-orange-500 text-xl" />
            <div>
              <h3 className="font-bold text-[#0F172A]">Phone</h3>
              <p className="text-gray-600">+254 700 000 000</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-500 text-xl" />
            <div>
              <h3 className="font-bold text-[#0F172A]">Email</h3>
              <p className="text-gray-600">info@mechtech.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-500 text-xl" />
            <div>
              <h3 className="font-bold text-[#0F172A]">Location</h3>
              <p className="text-gray-600">Mombasa, Kenya</p>
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg outline-none focus:border-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg outline-none focus:border-orange-500"
            ></textarea>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;