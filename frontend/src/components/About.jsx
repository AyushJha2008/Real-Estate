import {useState, useEffect} from "react";
import API from "../services/api";
import useContent from "../hooks/useContent";

const About = () => {
  const { content } = useContent();
const overview = content?.overview;

  useEffect(() => {
    API.get("/content").then((res) => setOverview(res.data.overview));
  }, []);

  return (
    <section className="bg-[#dfeeee] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 gap-16">
        {/* LEFT SIDE CIRCLE COLLAGE */}
        <div className="relative flex justify-center">
          {/* main big circle */}
          <img
            src="/images/about1.jpg"
            className="w-[420px] h-[420px] object-cover rounded-full"
            alt=""
          />

          {/* top circle */}
          <img
            src="/images/about2.jpg"
            className="absolute -top-10 left-10 w-40 h-40 rounded-full border-[10px] border-[#dfeeee] object-cover"
            alt=""
          />

          {/* bottom circle */}
          <img
            src="/images/about3.jpg"
            className="absolute bottom-0 right-6 w-32 h-32 rounded-full border-[10px] border-[#dfeeee] object-cover"
            alt=""
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Project
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            {overview?.description}
          </p>

          <p className="text-gray-600 leading-7">
            Built on the foundations of comfort, it evokes a true sense of
            freedom, protection, and belonging. The thoughtfully designed
            amenities create timeless choices for your family.
          </p>

          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md transition">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
