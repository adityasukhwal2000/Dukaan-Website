import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../../assets/logo.png";
import "./leftNavbar.css";

const LeftNavbar = () => {
  return (
    <section className="left-navbar">
      <div className="nav-menu-div">
        <div className="logo flex">
          <div className="logoImg">
            <img src={Logo} alt="Logo" width="40" height="40" />
          </div>
          <div className="name">
            <div>
              <p>Nishyan</p>
              <NavLink to="#">Visit store</NavLink>
            </div>
            <Icon
              icon="ep:arrow-down-bold"
              color="white"
              className="down-arrow"
            />
          </div>
        </div>

        <ul className="Nav-options">
          <li>
            <NavLink to="/">
              <div className="text-icons">
                <figure>
                  <Icon icon="octicon:home-24" color="#d2d4d9" width="21" />
                </figure>{" "}
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="carbon:order-details"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Orders</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <div className="text-icons">
                <figure>
                  <Icon icon="uil:apps" color="#d2d4d9" width="21" />
                </figure>{" "}
                <p>Products</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/delivery">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="iconamoon:delivery-light"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Delivery</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketing">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="ant-design:sound-outlined"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Marketing</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="tabler:brand-google-analytics"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Analytics</p>
              </div>
            </NavLink>
          </li>
          <li className="paymens-active ">
            <NavLink to="/payments">
              <div className="text-icons payments-active">
                <figure>
                  <Icon
                    icon="ic:sharp-payments"
                    color="#d2d4d9"
                    width="21"
                    className="non-active-payment"
                  />
                  <Icon
                    icon="ic:sharp-payments"
                    color="white"
                    width="21"
                    className="active-payment"
                  />
                </figure>{" "}
                <p>Payments</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tools">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="iconamoon:cursor-bold"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Tools</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/discounts">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="iconamoon:discount-bold"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Dicounts</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/audience">
              <div className="text-icons">
                <figure>
                  <Icon
                    icon="fluent:people-audience-20-regular"
                    color="#d2d4d9"
                    width="21"
                  />
                </figure>{" "}
                <p>Audience</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/appearence">
              <div className="text-icons">
                <figure>
                  <Icon icon="mdi:paint-outline" color="#d2d4d9" width="21" />
                </figure>{" "}
                <p>Appearence</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/plugins">
              <div className="text-icons">
                <figure>
                  <Icon icon="ph:lightning-bold" color="#d2d4d9" width="21" />
                </figure>{" "}
                <p>Plugins</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="fix-credits flex">
        <figure>
          <Icon icon="mi:credit-card" color="white" width="21" />
        </figure>
        <div className="available-credits">
          <p>Available credits</p>
          <h5>222.10</h5>
        </div>
      </div>
    </section>
  );
};

export default LeftNavbar;
