import React from "react";
import "./AdminCircle.scss";

const AdminCircle = ({user}) => {
  return (
    <div className="usercicle">
      <div className="usercicle_img">
        <img
          src={user?(user.imageUrl.startsWith("http")? user.imageUrl : `data:image/jpeg;base64,${user.imageUrl}`) : defaultUserPhoto}
          alt="img"
        />
      </div>
    </div>
  );
};

export default AdminCircle;
