import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-[6rem] text-text font-base min-h-screen px-6 py-10 md:px-20 lg:px-32 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-text focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Reach Us</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Our customer support team is available 24/7. Whether you prefer email, phone, or social media, we're just a message away.
          </p>

          <div className="space-y-4">
            <div>
              <span className="font-semibold">📧 Email:</span>{' '}
              <a
                href="mailto:support@yourstore.com"
                className="text-primary underline"
              >
                srivastavasrishti1000@gmail.com
              </a>
            </div>

            <div>
              <span className="font-semibold">📞 Phone:</span> +91 8957385479
            </div>

            <div>
              <span className="font-semibold">🏢 Address:</span>
              <p>
               
                Sector 135, Noida, India – 201301
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
