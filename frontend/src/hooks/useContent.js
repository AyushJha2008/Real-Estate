import { useEffect, useState } from "react";
import API from "../services/api";

export default function useContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/content")
      .then(res => setContent(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading };
}
