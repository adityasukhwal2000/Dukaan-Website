import LeftNavbar from "../leftNavbar/LeftNavbar";
import { Icon } from "@iconify/react";
import "./mainPage.css";
import { useState } from "react";
import allData from "../../data/data.json";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const [data] = useState(allData);

  // console.log(data);

  return (
    <section className="main-page flex">
      <LeftNavbar />

      <div className="rightPage ">
        <div className="rightTop flex">
          <div className="left-topNavbar flex">
            <p>Payments</p>
            <div className="how-it-works flex">
              <NavLink to="#" className="flex">
                <figure>
                  <Icon icon="heroicons:question-mark-circle" color="#4c4c4c" />
                </figure>
                <p>How it works</p>
              </NavLink>
            </div>
          </div>

          <div className="center-topNavbar flex">
            <figure>
              <Icon icon="ion:search-outline" color="#4c4c4c" />
            </figure>
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search features, tutorials, etc."
                autoComplete="off"
              />
            </form>
          </div>

          <div className="right-topNavbar flex">
            <figure>
              <Icon icon="basil:chat-solid" width="19" color="#4c4c4c" />
            </figure>
            <figure>
              <Icon icon="bxs:down-arrow" width="12" color="#4c4c4c" />
            </figure>
          </div>
        </div>

        {/* main content */}
        <div className="rightBottom">
          <div className="overview flex first">
            <h4>Overview</h4>
            <div className="last-month flex">
              <p>Last Month</p>
              <Icon
                icon="ep:arrow-down-bold"
                color="#rgb(98 98 98)"
                className="down-arrow2"
              />
            </div>
          </div>

          {/* 2nd */}
          <div className="online-amount second">
            <div className="online-orders second-background">
              <p>Online orders</p>
              <h4>231</h4>
            </div>

            <div className="amount-received second-background">
              <p>Amount received</p>
              <h4>₹ 23,92,312.19</h4>
            </div>
          </div>

          {/* 3rd */}

          <div className="third transactions">
            <div className="this-month">
              <h4>Transactions | This Month</h4>
            </div>

            <div className="all-data-div">
              <div className="all-data">
                <div className="search-sort flex">
                  <form className="this-month-search flex">
                    <figure>
                      <Icon icon="ion:search-outline" color="#4c4c4c" />
                    </figure>
                    <div className="data-search">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search by order ID..."
                        autoComplete="off"
                      />
                    </div>
                  </form>

                  <div className="sort-download flex">
                    <div className="Sort flex">
                      <p>Sort</p>
                      <figure className="double-arrow">
                        <Icon icon="ph:arrows-down-up-light" color="#4c4c4c" />
                      </figure>
                    </div>

                    <div className="download-btn">
                      <Icon
                        icon="material-symbols-light:download"
                        color="#4c4c4c"
                      />
                    </div>
                  </div>
                </div>
                {/*  */}

                <div className="table">
                  <table>
                    <thead>
                      <tr className="thead-data">
                        <th>Order ID</th>
                        <th className="flex order-date">
                          <p>Order date</p>{" "}
                          <figure>
                            <Icon
                              icon="bxs:down-arrow"
                              width="8"
                              color="#4c4c4c"
                            />
                          </figure>
                        </th>
                        <th className="order-amount">Order amount</th>
                        <th className="transaction-fees flex">
                          <p>Transaction fees</p>
                          <figure>
                            <Icon
                              icon="arcticons:letter-lowercase-circle-i"
                              color="rgb(14 14 14)"
                            />
                          </figure>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.map((currElem, index) => {
                        const {
                          Order_ID,
                          Order_data,
                          Order_amount,
                          Transaction_fees,
                        } = currElem;
                        return (
                          <tr className="json-data-rows" key={index}>
                            <td className="blue-id">{Order_ID}</td>
                            <td>{Order_data}</td>
                            <td>{Order_amount}</td>
                            <td>{Transaction_fees}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/*  */}
                <div className="pagination flex">
                  <div className="previous flex previous-next">
                    <Icon icon="ri:arrow-left-s-line" color="#4c4c4c" />
                    <p>Previous</p>
                  </div>

                  <div className="pageNum flex">
                    <p>1</p>
                    <p>...</p>
                    <p className="blue-num">10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                  </div>

                  <div className="next flex previous-next">
                    <p>Next</p>
                    <Icon icon="ri:arrow-right-s-line" color="#4c4c4c" />
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
