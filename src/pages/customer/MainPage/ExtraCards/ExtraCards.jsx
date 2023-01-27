import React from "react";
import "./ExtraCards.scss";

const ExtraCards = () => {
  return (
    <div className="extra_card">
      <div class="card">
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h1 class="title">Seguridad</h1>
        </div>

        <div class="content">
          <p>
            Absolutamente todas las transaciones son privadas y 100% seguras
          </p>
        </div>
      </div>
      <div class="card">
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-truck"></i>
          </div>
          <h1 class="title">Rapidez</h1>
        </div>

        <div class="content">
          <p>Enviamos tu pedido en 24 horas. ¡Disfruta tu nuevo dispositivo!</p>
        </div>
      </div>
      <div class="card">
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <h1 class="title">Eficiencia</h1>
        </div>

        <div class="content">
          <p>
            Soporte al cliente dedicado las 24/7 para ayudarte en todo momento
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraCards;
