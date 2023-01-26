import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainRouter } from "./router/MainRouter";
import { setCurrentUser } from "./store/user/userSlice";
import CustomerNavBar from "./ui/CustomerNavBar/CustomerNavBar";
import Footer from "./ui/Footer/Footer";
import "./App.css";
import KommunicateChat from "./ChatBot/chat";

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
    <div className="main">
      <CustomerNavBar />
      <MainRouter />
      <KommunicateChat />
      <Footer />
    </div>
  );
}

export default App;
