import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/customer/AboutUs/AboutUs";
import Cart from "./pages/customer/Cart/Cart";
import ContactUs from "./pages/customer/ContactUs/ContactUs";
import MainPage from "./pages/customer/MainPage/MainPage";
import ProductDetail from "./pages/customer/ProductDetail/ProductDetail";
import SearchProductPage from "./pages/customer/SearchProductPage/SearchProductPage";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./router/ProtectedRoutes";
import { store } from "./store/store";
import { setCurrentUser } from "./store/user/userSlice";
import CustomerNavBar from "./ui/CustomerNavBar/CustomerNavBar";
import Footer from "./ui/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentU = localStorage.getItem("currentUser");
    if (currentU) {
      const jsonUser = JSON.parse(currentU);
      dispatch(setCurrentUser(jsonUser));
    }
  }, []);
  return (
    <>
      <CustomerNavBar />
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
        <Route path="/faq" element="" />
        <Route path="/testimonials/:id" element="" />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
