import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainRouter } from "./router/MainRouter";
import { setCurrentUser } from "./store/user/userSlice";
import CustomerNavBar from "./ui/CustomerNavBar/CustomerNavBar";
import Footer from "./ui/Footer/Footer";
import "./App.css";

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
      <MainRouter/>
      <Footer />
    </>
  );
}

export default App;
