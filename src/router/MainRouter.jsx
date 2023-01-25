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

import { ProductsView } from "../pages/admin/Products/ProductsView";
import { AdminMainPage } from "../pages/admin/AdminMainPage";
import { CustomersView } from "../pages/admin/Customers/CustomersView";
import { ServicesView } from "../pages/admin/Services/ServicesView";
import { AdminsView } from "../pages/admin/Admins/AdminsView";
import { CouponsView } from "../pages/admin/Coupons/CouponsView";
import { CartsView } from "../pages/admin/Carts/CartsView";
import { ReviewsView } from "../pages/admin/Reviews/ReviewsView";
import { AnalitycsView } from "../pages/admin/Analytics/AnalitycsView";


import AllServices from "../pages/customer/AllServices/AllServices";
import AllProducts from "../pages/customer/AllProducts/AllProducts";
import { useDispatch } from "react-redux";
import { getCurrentCart } from "../store/cart/thunks"

export const MainRouter = () => {

  const dispatch = useDispatch()
  dispatch(getCurrentCart() )


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
          <Route path="/profile" element={<Profile />} />

        </Route>

        <Route path="/admin" element={<AdminMainPage/>} >
            <Route path="" element={<AnalitycsView/>}/>
            <Route path="analitycs" element={<AnalitycsView/>}/>
            <Route path="customers" element={<CustomersView/>}/>
            <Route path="admins" element={<AdminsView/>}/>
            <Route path="products" element={<ProductsView/>}/>
            <Route path="services" element={<ServicesView/>}/>
            <Route path="coupons" element={<CouponsView/>}/>
            <Route path="carts" element={<CartsView/>}/>
            <Route path="reviews" element={<ReviewsView/>}/>
        </Route>
        </Routes>

  );
};
