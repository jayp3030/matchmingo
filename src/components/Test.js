import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  const [data, setData] = useState([]);

  const getPostsData = () => {
    axios
      .get("http://localhost:8000/details/getImages")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
      
  };

  useEffect(() => {
    getPostsData();
  }, [data]);

  return (
    <div>
      {data.map((singledata, index) => {
        return (
          <img
            src={`data:image/jpeg;base64,${singledata.data}`}
            alt=""
            width="300"
            key={index}
          />
        );
      })}
    </div>
  );
}
