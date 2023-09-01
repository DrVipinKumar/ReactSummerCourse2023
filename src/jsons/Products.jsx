import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-2">
      <div>
        <h1>Select Your Products</h1>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center m-2">
        {products.map((product) => (
          <Item
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
