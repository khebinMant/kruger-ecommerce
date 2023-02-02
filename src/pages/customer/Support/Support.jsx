import React from "react";
import "./Support.scss";

const Support = () => {
  return (
    <div className="support">
      <h2 className="heading">¿Necesitas Ayuda?</h2>
      <div className="support_img">
        <img src="./images/support.svg" alt="" />
      </div>

      <div className="support_cards">
        <div class="card">
          <div class="card-top-part">
            <div class="left-part">
              <div class="user-name">
                <p class="name">Jane Doe</p>
                <p class="role"> manager </p>
              </div>
              <div class="user-position">
                <p class="position">Delivery Manager</p>
              </div>
            </div>
            <div class="right-part">
              <div class="user-photo">
                <img
                  src="https://pymstatic.com/5844/conversions/personas-emocionales-wide.jpg"
                  class="photo"
                />
              </div>
            </div>
          </div>
          <div class="card-bottom-part">
            <div class="bottom-part">
              <a href="mailto: krugercell@example.com" class="link">
                <span class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div class="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20a%20la%20entrega%20de%20mi%orden... "
                target="_blank"
                class="link"
              >
                <span class="icon">
                  <i class="fa-solid fa-phone-flip"></i>
                </span>
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-top-part">
            <div class="left-part">
              <div class="user-name">
                <p class="name">Luna Ruiz</p>
                <p class="role"> manager </p>
              </div>
              <div class="user-position">
                <p class="position">Payment Manager</p>
              </div>
            </div>
            <div class="right-part">
              <div class="user-photo">
                <img
                  src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4"
                  class="photo"
                />
              </div>
            </div>
          </div>
          <div class="card-bottom-part">
            <div class="bottom-part">
              <a href="mailto: krugercell@example.com" class="link">
                <span class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div class="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20al%20pago%20de%20mi%20orden... "
                target="_blank"
                class="link"
              >
                <span class="icon">
                  <i class="fa-solid fa-phone-flip"></i>
                </span>
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-top-part">
            <div class="left-part">
              <div class="user-name">
                <p class="name">John Doe</p>
                <p class="role"> manager </p>
              </div>
              <div class="user-position">
                <p class="position">IT supporter</p>
              </div>
            </div>
            <div class="right-part">
              <div class="user-photo">
                <img
                  src="https://static2.abc.es/media/bienestar/2022/06/01/jesus-matos-2-kQVC--620x349@abc.png"
                  class="photo"
                />
              </div>
            </div>
          </div>
          <div class="card-bottom-part">
            <div class="bottom-part">
              <a href="mailto: krugercell@example.com" class="link">
                <span class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div class="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20a%20%un%20problema%20tecnico "
                target="_blank"
                class="link"
              >
                <span class="icon">
                  <i class="fa-solid fa-phone-flip"></i>
                </span>
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
