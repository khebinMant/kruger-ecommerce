import "./Support.scss";

const Support = () => {
  return (
    <div className="support">
      <h2 className="heading">¿Necesitas Ayuda?</h2>
      <div className="support_img">
        <img src="./images/support.svg" alt="" className="floating" />
      </div>

      <div className="support_cards">
        <div className="card floating">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
                <p className="name">Jane Doe</p>
                <p className="role"> manager </p>
              </div>
              <div className="user-position">
                <p className="position">Delivery Manager</p>
              </div>
            </div>
            <div className="right-part">
              <div className="user-photo">
                <img
                  src="https://pymstatic.com/5844/conversions/personas-emocionales-wide.jpg"
                  className="photo"
                />
              </div>
            </div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              <a href="mailto: krugercell@example.com" className="link">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div className="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20a%20la%20entrega%20de%20mi%orden... "
                target="_blank"
                className="link"
              >
                <span className="icon">
                  <i className="fa-solid fa-phone-flip"></i>
                </span>
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="card floating">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
                <p className="name">Luna Ruiz</p>
                <p className="role"> manager </p>
              </div>
              <div className="user-position">
                <p className="position">Payment Manager</p>
              </div>
            </div>
            <div className="right-part">
              <div className="user-photo">
                <img
                  src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4"
                  className="photo"
                />
              </div>
            </div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              <a href="mailto: krugercell@example.com" className="link">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div className="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20al%20pago%20de%20mi%20orden... "
                target="_blank"
                className="link"
              >
                <span className="icon">
                  <i className="fa-solid fa-phone-flip"></i>
                </span>
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="card floating">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
                <p className="name">John Doe</p>
                <p className="role"> manager </p>
              </div>
              <div className="user-position">
                <p className="position">IT supporter</p>
              </div>
            </div>
            <div className="right-part">
              <div className="user-photo">
                <img
                  src="https://static2.abc.es/media/bienestar/2022/06/01/jesus-matos-2-kQVC--620x349@abc.png"
                  className="photo"
                />
              </div>
            </div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              <a href="mailto: krugercell@example.com" className="link">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                Email
              </a>
            </div>
            <div className="bottom-part">
              <a
                href="https://wa.me/+593995426348?text=Hola%20quisiera%20obtener%20ayuda%20con%20respecto%20a%20%un%20problema%20tecnico "
                target="_blank"
                className="link"
              >
                <span className="icon">
                  <i className="fa-solid fa-phone-flip"></i>
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
