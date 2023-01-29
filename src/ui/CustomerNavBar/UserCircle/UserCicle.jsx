import React from "react";
import "./UserCircle.scss";
import defaultUserPhoto from "../../../assets/defaultUserPhoto.jpg";
import { useSelector } from "react-redux";
const UserCicle = () => {
  const currentUser = useSelector((state)=>state.users.currentUser);

  return (
    <div className="usercicle">
      <div className="usercicle_img">
        <img
          src={currentUser.imageUrl?(currentUser.imageUrl.startsWith("http")? currentUser.imageUrl : `data:image/jpeg;base64,${currentUser.imageUrl}`) : defaultUserPhoto}
          alt="currentUser"
        />
      </div>
    </div>
  );
};

export default UserCicle;
