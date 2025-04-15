import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info & Form */}
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch</h1>
          <p className="text-gray-700 mb-6 text-lg">
            We'd love to hear from you. Whether you have a question about features, pricing, support, or anything else — our team is ready to answer all your questions.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Integration */}
        <div className="w-full h-[400px] shadow-lg rounded-xl overflow-hidden">
          <iframe
            title="Our Location"
            className="w-full h-full border-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848115113577!2d90.39129331536336!3d23.75088509460953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7af877d2593%3A0x5b4f0b0e3e43a57b!2sUniversity%20Campus!5e0!3m2!1sen!2sus!4v1684168593326!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
