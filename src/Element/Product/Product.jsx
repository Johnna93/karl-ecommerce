import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/1",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Product;
