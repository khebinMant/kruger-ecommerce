import React from "react";
import "./MainPage.scss";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import HomeExtras from "./HomeExtras/HomeExtras";
import WhyUs from "./WhyUs/WhyUs";
import Services from "./Services/Services";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <Products />
      <HomeExtras />
      <Services />
      <WhyUs />
    </div>
  );
};

export default MainPage;
