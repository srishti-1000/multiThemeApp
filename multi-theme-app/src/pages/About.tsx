import React from 'react';

const About: React.FC = () => {
  return (
    <div className=" py-[6rem] text-text font-base min-h-screen px-6 py-10 md:px-20 lg:px-32 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Us</h1>

      <p className="mb-4 text-lg leading-relaxed">
        Welcome to <strong>MultiTheme App</strong>, your ultimate online shopping destination for everything you need — and more.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        At <strong>MultiTheme App</strong>, we believe that shopping should be seamless, inspiring, and accessible. That’s why we've created a platform that brings together a vast collection of high-quality products across a wide range of categories — from fashion, electronics, home essentials, beauty, fitness, toys, gadgets, to lifestyle accessories — all in one place.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Who We Are</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Founded with the vision of redefining the online shopping experience, we are more than just an e-commerce platform — we are a customer-first brand committed to delivering excellence, convenience, and trust.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">What We Offer</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Electronics & Gadgets – smartphones, laptops, smart devices, audio gear, and more</li>
        <li>Fashion & Apparel – trendy clothing, shoes, and accessories</li>
        <li>Home & Kitchen – decor, furniture, storage, and cookware</li>
        <li>Beauty & Health – skincare, makeup, and personal care</li>
        <li>Fitness & Sports – equipment, gear, and activewear</li>
        <li>Toys & Kids – toys, games, and children’s essentials</li>
        <li>Lifestyle & More – books, gifts, travel, and unique finds</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Why Shop With Us?</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Unmatched product variety and curated collections</li>
        <li>Competitive pricing with regular offers</li>
        <li>Fast & reliable delivery options</li>
        <li>Hassle-free returns and 24/7 support</li>
        <li>Safe, secure payments with multiple options</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Our Commitment</h2>
      <p className="mb-4 text-lg leading-relaxed">
        We are committed to offering you high-quality, genuine products with transparency and innovation at the core of everything we do.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Join Our Community</h2>
      <p className="mb-4 text-lg leading-relaxed">
        We're not just building a store — we're creating a thriving community of smart shoppers and passionate trendsetters. Follow us, stay updated, and be a part of our journey.
      </p>

      <p className="mt-10 text-lg font-semibold italic">
        Thank you for choosing <strong>MultiTheme App</strong>. We look forward to serving you!
      </p>
    </div>
  );
};

export default About;
