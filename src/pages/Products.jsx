import React from "react";
import FoodCard from "../components/FoodCard";
import { Header } from "../components/Headers";
import HeaderBottom from "../components/HeaderBottom";
import BannerImages from "../components/BannerImages";
import FoodPage from "./FoodPage";

const Products = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <BannerImages/>
      <FoodCard/>
      <FoodPage/>
    </>
  );
};

export default Products;
