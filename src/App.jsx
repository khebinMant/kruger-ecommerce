import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainRouter } from "./router/MainRouter";
import { setCurrentUser } from "./store/user/userSlice";
import CustomerNavBar from "./ui/CustomerNavBar/CustomerNavBar";
import Footer from "./ui/Footer/Footer";
import "./App.css";
import KommunicateChat from "./ChatBot/chat";
import AdminNavBar from "./ui/AdminNavBar/AdminNavBar";


function App() {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.users)

  useEffect(() => {
    const currentU = localStorage.getItem("currentUser");
    if (currentU) {
      const jsonUser = JSON.parse(currentU);
      dispatch(setCurrentUser(jsonUser));
    }
  }, []);
  return (
    <div className="main">
    {
        currentUser===null || currentUser.role === 'CUSTOMER'?
        <CustomerNavBar />
        :
        <AdminNavBar/>
    }
      <MainRouter />
      <KommunicateChat />
      <Footer />
    </div>
  );
}

export default App;
