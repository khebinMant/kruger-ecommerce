import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/customer/MainPage/MainPage";
import Login from "../pages/login/Login";
import SearchProductPage from "../pages/customer/SearchProductPage/SearchProductPage";
import AboutUs from "../pages/customer/AboutUs/AboutUs";
import ProductDetail from "../pages/customer/ProductDetail/ProductDetail";
import ContactUs from "../pages/customer/ContactUs/ContactUs";
import Faq from "../pages/customer/Faq/Faq";
import ProtectedRoutes from "./ProtectedRoutes";
import Cart from "../pages/customer/Cart/Cart";
import Payment from "../pages/customer/Payment/Payment";
import Profile from "../pages/customer/Profile/Profile";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";                  //core css


export const MainRouter = () => {

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element="all products" />
        <Route path="/service/:id" element="" />
        <Route path="/services" element="all services" />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/testimonials/:id" element="" />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
    </Routes>
  );
};
