import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({

  // HERO SECTION
  hero: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    price1: { type: String, default: "" },
    price2: { type: String, default: "" },
    location: { type: String, default: "" }
  },

  // OVERVIEW / ABOUT
  overview: {
    description: { type: String, default: "" }
  },

  connectivity: [
    {
      title: String,
      description: String
    }
  ],

  // AMENITIES LIST
  amenities: [
    {
      title: { type: String, default: "" }
    }
  ],

   // NEW: DEVELOPER
  developer: {
    description: String,
    stats: [
      {
        label: String,
        value: String
      }
    ]
  },

  // CONSTRUCTION UPDATES
  construction: [
    {
      label: { type: String, default: "" }
    }
  ],

  // FAQ SECTION
  faq: [
    {
      question: { type: String, default: "" },
      answer: { type: String, default: "" }
    }
  ]

}, { timestamps: true });

export default mongoose.model("Content", ContentSchema);
