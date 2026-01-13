import { useEffect, useState } from "react";

const ApiComponent = () => {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://wrong-api-url.com/data")
      .then(res => {
        if (!res.ok) throw new Error("API request failed");
        return res.json();
      })
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return <p>Data length: {data.length}</p>;
};

export default ApiComponent;
