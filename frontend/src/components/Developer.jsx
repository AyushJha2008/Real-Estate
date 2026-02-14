// import React from "react";
// import useContent from "../hooks/useContent";


// const Developer = () => {
//   const { content } = useContent();
// const developer = content?.developer;

//   return (
//     <section className="bg-[#e9f4f2] py-24">

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-gray-800 mb-6">
//           About Developer
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 max-w-4xl mx-auto leading-7">
//           {developer?.description}
//         </p>

//         {/* Stats strip */}
//         <div className="bg-green-100 mt-12 rounded-xl py-8 grid md:grid-cols-5 gap-6 text-center">

//           <div>
//             <h3 className="text-2xl font-bold">6</h3>
//             <p className="text-gray-600 text-sm">Projects</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold">1.32 LAC</h3>
//             <p className="text-gray-600 text-sm">sq ft area developed</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold">449+</h3>
//             <p className="text-gray-600 text-sm">Happy Families</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold">3.77 LAC</h3>
//             <p className="text-gray-600 text-sm">sq ft ongoing</p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold">2.7 LAC</h3>
//             <p className="text-gray-600 text-sm">sq ft upcoming</p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Developer;


import React from "react";
import useContent from "../hooks/useContent";

const Developer = () => {

  const { content, loading } = useContent();
  const developer = content?.developer;

  if (loading) {
    return (
      <section className="py-24">
        <p className="text-center">Loading developer section...</p>
      </section>
    );
  }

  return (
    <section className="bg-[#e9f4f2] py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About Developer
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-4xl mx-auto leading-7">
          {developer?.description}
        </p>

        {/* Stats */}
        <div className="bg-green-100 mt-12 rounded-xl py-8 grid md:grid-cols-5 gap-6 text-center">

          {developer?.stats?.map((stat, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Developer;
