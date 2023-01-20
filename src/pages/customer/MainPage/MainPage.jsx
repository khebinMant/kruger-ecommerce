import React from "react";
import "./MainPage.scss";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import HomeExtras from "./HomeExtras/HomeExtras";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <Products />
      <HomeExtras />
    </div>
  );
};

export default MainPage;
