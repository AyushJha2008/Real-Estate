const FloorPlan = () => {

  return (
    <section className="bg-[#bde3db] py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/about2.jpg"
            className="rounded-xl shadow-lg"
            alt=""
          />
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-10">

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              1 bhk
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">
              2 bhk
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">
              5.6 bhk
            </button>
          </div>

          {/* Info */}
          <div className="space-y-3 text-gray-700">
            <p><strong>Type</strong> – 1Bhk</p>
            <p><strong>Area</strong> – 380–411 sq.ft</p>
            <p><strong>Price</strong> – Click for price</p>
          </div>

          {/* Button */}
          <button className="mt-8 bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md shadow">
            Download Floor Plan
          </button>

        </div>

      </div>

    </section>
  );
};

export default FloorPlan;
