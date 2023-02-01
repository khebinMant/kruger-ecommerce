import React from "react";
import "./EncourageUser.scss";

const EncourageUser = ({ t }) => {
  return (
    <section className="encourage">
      <h2 className="encourage_title"> {t("opportunity-main.text")}</h2>
      <div className="spacer layer1"></div>
    </section>
  );
};

export default EncourageUser;
