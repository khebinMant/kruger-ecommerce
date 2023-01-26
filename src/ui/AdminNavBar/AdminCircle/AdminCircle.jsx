import React from "react";
import "./AdminCircle.scss";

const AdminCircle = ({user}) => {
  return (
    <div className="usercicle">
      <div className="usercicle_img">
        <img
          src={user.imageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdminCircle;
