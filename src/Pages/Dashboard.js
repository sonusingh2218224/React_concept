import React, { useEffect, useState } from "react";
// import { Card, Image } from "react-bootstrap";

import Helper from "../Helper";
import RecipeReviewCard from "./RecipeReviewCard";

function Dashboard() {
  const [products, SetProducts] = useState([]);

  const fetchData = () => {
    fetch(`${Helper.Environment.BASE_API_URL_ECOMMERCE}products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      
        SetProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((item, index) => {
          return <RecipeReviewCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
