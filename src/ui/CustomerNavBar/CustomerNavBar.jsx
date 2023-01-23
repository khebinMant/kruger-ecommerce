import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../store/user/userSlice";
import "./CustomerNavBar.scss";

const CustomerNavBar = () => {
  const navbar = useRef();
  const [loginTxt, setLoginTxt] = useState("");
  const navigation = useNavigate();
  const user = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    user ? setLoginTxt("Log out") : setLoginTxt("Login");
  }, [user]);

  const handleHamClick = () => {
    navbar.current.classList.toggle("header__nav--close");
  };
  const handleLoginClick = () => {
    if (user) {
      setLoginTxt("Login");
      localStorage.removeItem("currentUser");
      dispatch(setCurrentUser(null));
    } else {
      navigation("/login");
    }
  };

  return (
    <header className="header">
      <div className="header_logo_username_container">
        {" "}
        <NavLink className="header__logo-navlink" to="/">
          <h1 className="header__logo">Kruger</h1>
        </NavLink>
        {user && (
          <NavLink className="header_user_name_nav" to="/">
            <p className="header__userName">{user.firstName.toUpperCase()}</p>
          </NavLink>
        )}
      </div>
      <i
        onClick={handleHamClick}
        className="fa-solid fa-bars header__menu-ham"
      ></i>
      <nav ref={navbar} className="header__nav header__nav--close">
        <ul className="header__list">
          <div className="header__item mega-menu header__navlink">
            <div class="mega-menu__item mega-menu__trigger">
              <div>
                <p>Explore</p>
              </div>

              <div class="mega-menu__content">
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/"
                  >
                    <p>Home</p>
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/search"
                  >
                    <p>Search</p>
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/products"
                  >
                    <p>All products</p>
                  </NavLink>
                </li>

                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/services"
                  >
                    <p>All services</p>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>

          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              onClick={handleLoginClick}
              to="/login"
            >
              <p>{loginTxt}</p>
            </NavLink>
          </li>
          <div className="header__item mega-menu header__navlink">
            <div class="mega-menu__item mega-menu__trigger">
              <div>
                <p>About</p>
              </div>

              <div class="mega-menu__content">
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/contact"
                  >
                    <p>Contact us</p>
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/about"
                  >
                    <p>About us</p>
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__navlink active-link"
                        : "header__navlink"
                    }
                    to="/faq"
                  >
                    <p>FAQ</p>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>

          <li className="header__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navlink active-link" : "header__navlink"
              }
              to="/cart"
            >
              <p>Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomerNavBar;
