import React from "react";

const Explore = () => {
  return (
    <section className="bg-[#bde3db] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Explore More Buildings in the Township
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {[1,2,3].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >

              <img
                src="/images/building1.png"
                className="w-full h-72 object-cover"
                alt=""
              />

              <div className="bg-gradient-to-r from-lime-300 to-green-400 text-center py-4 font-semibold text-gray-800">
                Newly Launched - Vighnaharta Enclave
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Explore;
