import React, { useState, useEffect } from "react";

function FetchData() {
  // state initilize
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    // call back function
    () => {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      };

      fetchData();
    },
    []
  ); // Empty dependency array means it runs once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
