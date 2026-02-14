import React from "react";
import useContent from "../hooks/useContent";

const FAQ = () => {

  const { content, loading } = useContent();
  const faq = content?.faq || [];

  if (loading) {
    return (
      <section className="py-24">
        <p className="text-center">Loading FAQ...</p>
      </section>
    );
  }

  return (
    <section className="bg-[#e9f4f2] py-24">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        <div className="space-y-4">

          {faq.map((item, index) => (
            <details
              key={index}
              className="bg-green-100 rounded-lg p-4 cursor-pointer"
            >
              <summary className="font-medium text-gray-800">
                {item.question}
              </summary>

              <p className="mt-3 text-gray-600">
                {item.answer}
              </p>
            </details>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;
