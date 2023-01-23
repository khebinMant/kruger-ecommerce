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
import AllServices from "../pages/customer/AllServices/AllServices";
import AllProducts from "../pages/customer/AllProducts/AllProducts";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchProductPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/service/:id" element="" />
      <Route path="/services" element={<AllServices />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/testimonials/:id" element="" />
      <Route element={<ProtectedRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};
