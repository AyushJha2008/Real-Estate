import useContent from "../hooks/useContent";

const Hero = () => {
const { content } = useContent();
const hero = content?.hero;


  return (
    <section className="w-full pt-20 bg-white">
      <div className="grid md:grid-cols-2">
        {/* LEFT IMAGE SIDE */}
        <div className="relative h-[620px]">
          <img
            src="/images/hero.jpg"
            alt="project"
            className="w-full h-full object-cover"
          />

          {/* Overlay text */}
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-[#f7f7f7] flex items-center justify-center">
          <div className="w-full max-w-md text-center px-6">
            {/* Logo title */}
            <h2 className="text-5xl font-serif text-gray-800">{hero?.title}</h2>



            {/* divider */}
            <div className="border-b my-8"></div>

            {/* pricing row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">SMART 1 BHK</p>
                <h3 className="text-2xl font-bold mt-1">{hero?.price1}</h3>
                <p className="text-sm text-gray-500">onwards</p>
              </div>

              <div className="h-16 border-l"></div>

              <div>
                <p className="text-gray-500 text-sm">PREMIUM 2 BHK</p>
                <h3 className="text-2xl font-bold mt-1">{hero?.price2}</h3>
                <p className="text-sm text-gray-500">onwards</p>
              </div>
            </div>

            {/* divider */}
            <div className="border-b my-8"></div>

            {/* location */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="text-red-500">📍</span>
              <p>{hero?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
