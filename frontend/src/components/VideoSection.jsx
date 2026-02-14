import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[420px]">

      {/* background image */}
      <img
        src="/images/aminities.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        {/* play button */}
        <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
          <span className="text-3xl text-gray-800">▶</span>
        </div>

      </div>

    </section>
  );
};

export default VideoSection;
