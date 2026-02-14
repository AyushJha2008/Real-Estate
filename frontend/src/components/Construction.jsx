import useContent from "../hooks/useContent";

const Construction = () => {
  const { content } = useContent();
const construction = content?.construction || [];


  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Construction Updates
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/aminities.jpg" className="w-full h-72 object-cover" />
            <div className="bg-green-50 text-center py-3 font-medium">
              {construction[0]?.label}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/aminities.jpg" className="w-full h-72 object-cover" />
            <div className="bg-green-50 text-center py-3 font-medium">
              {construction[1]?.label}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/images/aminities.jpg" className="w-full h-72 object-cover" />
            <div className="bg-green-50 text-center py-3 font-medium">
              {construction[2]?.label}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Construction;
