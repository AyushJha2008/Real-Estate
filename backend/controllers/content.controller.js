import Content from "../models/content.model.js";

export const getContent = async (req, res) => {
  try {
    const content = await Content.findOne();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContent = async (req, res) => {
  try {
    let content = await Content.findOne();

    if (!content) {
      content = new Content(req.body);
    } else {
      content = Object.assign(content, req.body);
    }

    await content.save();
    res.json({ message: "Content updated successfully" });
    return content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
