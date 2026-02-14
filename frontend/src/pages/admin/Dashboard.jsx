import React, { useEffect, useState } from "react";
import API from "../../services/api";

const Dashboard = () => {

  // SAFE INITIAL STATE
  const [content, setContent] = useState({
    hero: {},
    overview: {},
    amenities: [],
    construction: [],
    faq: []
  });

  const [loading, setLoading] = useState(true);

  // FETCH CONTENT FROM BACKEND
  useEffect(() => {
    API.get("/content")
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // HERO UPDATE
  const handleHeroChange = (field, value) => {
    setContent((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value }
    }));
  };

  // OVERVIEW UPDATE
  const handleOverviewChange = (value) => {
    setContent((prev) => ({
      ...prev,
      overview: { ...prev.overview, description: value }
    }));
  };

  // AMENITIES UPDATE
  const handleAmenityChange = (index, value) => {
    const updated = [...(content.amenities || [])];
    updated[index] = { ...updated[index], title: value };
    setContent((prev) => ({ ...prev, amenities: updated }));
  };

  // CONSTRUCTION UPDATE
  const handleConstructionChange = (index, value) => {
    const updated = [...(content.construction || [])];
    updated[index] = { ...updated[index], label: value };
    setContent((prev) => ({ ...prev, construction: updated }));
  };

  // FAQ UPDATE
  const handleFaqChange = (index, field, value) => {
    const updated = [...(content.faq || [])];
    updated[index] = { ...updated[index], [field]: value };
    setContent((prev) => ({ ...prev, faq: updated }));
  };

  // SAVE TO DATABASE
  const saveChanges = async () => {
    try {
      await API.put("/content", content);
      alert("Content Updated Successfully");
    } catch (error) {
      alert("Error updating content");
    }
  };

  // CONNECTIVITY
const handleConnectivityChange = (index, field, value) => {
  const updated = [...(content.connectivity || [])];
  updated[index] = { ...updated[index], [field]: value };
  setContent(prev => ({ ...prev, connectivity: updated }));
};

// DEVELOPER DESC
const handleDeveloperDesc = (value) => {
  setContent(prev => ({
    ...prev,
    developer: { ...prev.developer, description: value }
  }));
};

// DEVELOPER STATS
const handleDeveloperStats = (index, field, value) => {
  const updated = [...(content.developer?.stats || [])];
  updated[index] = { ...updated[index], [field]: value };
  setContent(prev => ({
    ...prev,
    developer: { ...prev.developer, stats: updated }
  }));
};


  // LOADING STATE
  if (loading) return <p className="p-10">Loading dashboard...</p>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* HERO SECTION */}
      <div className="bg-white p-6 shadow rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Hero Section</h2>

        <input
          className="border p-2 w-full mb-3"
          value={content.hero?.title || ""}
          onChange={(e) => handleHeroChange("title", e.target.value)}
          placeholder="Hero Title"
        />

        <input
          className="border p-2 w-full mb-3"
          value={content.hero?.price1 || ""}
          onChange={(e) => handleHeroChange("price1", e.target.value)}
          placeholder="Price 1"
        />

        <input
          className="border p-2 w-full mb-3"
          value={content.hero?.price2 || ""}
          onChange={(e) => handleHeroChange("price2", e.target.value)}
          placeholder="Price 2"
        />

        <input
          className="border p-2 w-full"
          value={content.hero?.location || ""}
          onChange={(e) => handleHeroChange("location", e.target.value)}
          placeholder="Location"
        />
      </div>

      {/* OVERVIEW SECTION */}
      <div className="bg-white p-6 shadow rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Overview Section</h2>

        <textarea
          className="border p-3 w-full"
          rows="4"
          value={content.overview?.description || ""}
          onChange={(e) => handleOverviewChange(e.target.value)}
        />
      </div>

      {/* AMENITIES */}
      <div className="bg-white p-6 shadow rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Amenities</h2>

        {content.amenities?.map((item, index) => (
          <input
            key={index}
            className="border p-2 w-full mb-2"
            value={item.title}
            onChange={(e) => handleAmenityChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="bg-white p-6 shadow rounded mb-8">
  <h2 className="text-xl font-bold mb-4">Nearby Connectivity</h2>

  {content.connectivity?.map((item, index) => (
    <div key={index} className="mb-3">
      <input
        className="border p-2 w-full mb-2"
        value={item.title}
        onChange={(e) =>
          handleConnectivityChange(index, "title", e.target.value)
        }
      />

      <input
        className="border p-2 w-full"
        value={item.description}
        onChange={(e) =>
          handleConnectivityChange(index, "description", e.target.value)
        }
      />
    </div>
  ))}
</div>


      {/* CONSTRUCTION */}
      <div className="bg-white p-6 shadow rounded mb-8">
        <h2 className="text-xl font-bold mb-4">Construction Updates</h2>

        {content.construction?.map((item, index) => (
          <input
            key={index}
            className="border p-2 w-full mb-2"
            value={item.label}
            onChange={(e) => handleConstructionChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="bg-white p-6 shadow rounded mb-8">
  <h2 className="text-xl font-bold mb-4">About Developer</h2>

  <textarea
    className="border p-2 w-full mb-4"
    value={content.developer?.description || ""}
    onChange={(e) => handleDeveloperDesc(e.target.value)}
  />

  {content.developer?.stats?.map((stat, index) => (
    <div key={index} className="flex gap-3 mb-2">
      <input
        className="border p-2 w-1/2"
        value={stat.label}
        onChange={(e) =>
          handleDeveloperStats(index, "label", e.target.value)
        }
      />
      <input
        className="border p-2 w-1/2"
        value={stat.value}
        onChange={(e) =>
          handleDeveloperStats(index, "value", e.target.value)
        }
      />
    </div>
  ))}
</div>


      {/* FAQ */}
      <div className="bg-white p-6 shadow rounded mb-8">
        <h2 className="text-xl font-bold mb-4">FAQ</h2>

        {content.faq?.map((item, index) => (
          <div key={index} className="mb-4">
            <input
              className="border p-2 w-full mb-2"
              value={item.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              placeholder="Question"
            />

            <textarea
              className="border p-2 w-full"
              rows="2"
              value={item.answer}
              onChange={(e) =>
                handleFaqChange(index, "answer", e.target.value)
              }
              placeholder="Answer"
            />
          </div>
        ))}
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={saveChanges}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow"
      >
        Save Changes
      </button>

    </div>
  );
};

export default Dashboard;
