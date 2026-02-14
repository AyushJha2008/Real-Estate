import React from "react";
import { FaDumbbell, FaChild, FaRunning, FaSpa } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";
import {useState, useEffect} from "react";
import API from "../services/api";
import useContent from "../hooks/useContent";


const Amenities = () => {
  const { content } = useContent();
const amenities = content?.amenities || [];


useEffect(() => {
  API.get("/content").then(res => setAmenities(res.data.amenities));
}, []);

  return (
    <section className="bg-[#dfeeee] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Amenities</h2>

        <p className="text-gray-500 mb-12">
          Thoughtfully crafted surroundings that reflect tradition, comfort, and
          a human-centered design approach.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/aminities.jpg"
              className="rounded-xl shadow-md"
              alt=""
            />
          </div>

          {/* RIGHT ICON GRID */}
          <div className="grid grid-cols-3 gap-y-10">
            {/* icon item */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <FaDumbbell size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[0]?.title}</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <FaChild size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[1]?.title}</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <FaChild size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[2]?.title}</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <FaRunning size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[3]?.title}</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <MdSelfImprovement size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[4]?.title}</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <FaSpa size={26} className="text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-700">{amenities[5]?.title}</p>
            </div>
          </div>
        </div>

        {/* View More */}
        <div className="flex justify-center mt-12">
          <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-md shadow">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
