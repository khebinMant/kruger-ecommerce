import React from "react";
import "./MainPage.scss";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import HomeExtras from "./HomeExtras/HomeExtras";
import WhyUs from "./WhyUs/WhyUs";
import Services from "./Services/Services";
import MainInfoHome from "./MainInfo/MainInfo";
import EncourageUser from "./EncourageUser/EncourageUser";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <MainInfoHome />

      <Products />
      <HomeExtras />
      <Services />
      <WhyUs />
      <EncourageUser />
    </div>
  );
};

export default MainPage;
