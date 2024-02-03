import React from "react";
import FoodCard from "../components/FoodCard";
import { Header } from "../components/Headers";
import { HeaderBottom } from "../components/HeaderBottom";

const Products = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <FoodCard/>
    </>
  );
};

export default Products;
