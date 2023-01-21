import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/customer/AboutUs/AboutUs";
import MainPage from "./pages/customer/MainPage/MainPage";
import ProductDetail from "./pages/customer/ProductDetail/ProductDetail";
import SearchProductPage from "./pages/customer/SearchProductPage/SearchProductPage";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./router/ProtectedRoutes";
import CustomerNavBar from "./ui/CustomerNavBar/CustomerNavBar";
import Footer from "./ui/Footer/Footer";

function App() {
  return (
    <>
      <CustomerNavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={"<Cart />"} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
