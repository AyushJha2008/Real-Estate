import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-green-600 font-bold text-xl">LIME ROOFING</h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Overview</a>
          <a href="#">Connectivities</a>
          <a href="#">Amenities</a>
          <a href="#">Floor Plans</a>
          <a href="#">Developer</a>
          <a href="#">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-green-500 text-white px-5 py-2 rounded-md">
          Enquiry Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
