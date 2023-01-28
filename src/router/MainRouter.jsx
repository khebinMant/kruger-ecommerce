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
import { getCurrentCart } from "../store/cart/thunks";
import AreaView from "../pages/admin/ShowCharts/AreaView";
import LineView from "../pages/admin/ShowCharts/LineView";
import BarView from "../pages/admin/ShowCharts/BarView";
import ComposedView from "../pages/admin/ShowCharts/ComposedView";
import FunnelView from "../pages/admin/ShowCharts/FunnelView";
import PieView from "../pages/admin/ShowCharts/PieView";
import RadarView from "../pages/admin/ShowCharts/RadarView";
import RadialView from "../pages/admin/ShowCharts/RadialView";
import SankeyView from "../pages/admin/ShowCharts/SankeyView";
import TreeView from "../pages/admin/ShowCharts/TreeView";
import TextEditor from "../pages/admin/TextEditor/TextEditor";
import ToDo from "../pages/admin/ToDo/ToDo";
import CalendarComponent from "../pages/admin/Calendar/CalendarComponent";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import { Order } from "../pages/customer/Order/Order";

export const MainRouter = () => {
  const dispatch = useDispatch();
  dispatch(getCurrentCart());

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
        <Route path="/orders" element={<Order />} />
      </Route>
      <Route element={<ProtectedAdminRoutes />}>
        <Route path="/admin" element={<AdminMainPage />}>
          <Route path="" element={<ProductsView />} />
          <Route path="analitycs" element={<AnalitycsView />} />
          <Route path="line" element={<LineView />} />
          <Route path="area" element={<AreaView />} />
          <Route path="bar" element={<BarView />} />
          <Route path="composed" element={<ComposedView />} />
          <Route path="funnel" element={<FunnelView />} />
          <Route path="pie" element={<PieView />} />
          <Route path="radar" element={<RadarView />} />
          <Route path="radial" element={<RadialView />} />
          <Route path="sankey" element={<SankeyView />} />
          <Route path="tree" element={<TreeView />} />
          <Route path="admins" element={<AdminsView />} />
          <Route path="products" element={<ProductsView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="coupons" element={<CouponsView />} />
          <Route path="carts" element={<CartsView />} />
          <Route path="reviews" element={<ReviewsView />} />
          <Route path="customers" element={<CustomersView />} />
          <Route path="calendar" element={<CalendarComponent />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="text-editor" element={<TextEditor />} />
        </Route>
      </Route>
    </Routes>
  );
};
