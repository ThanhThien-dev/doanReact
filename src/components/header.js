import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import AccountItem from "./data/accountItem";
import { Link } from "react-router-dom";
import "./css components/header.css";

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [login, setLogin] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      setLogin(false);
    }
  }, []);

  return (
    <header className="container">
      <div className="wrapper">
        {/* HEADER-LOGO */}
        <div className="header-white">
          <Link to={"/"}>
            <div className="header-logo">
              <img
                src={require("./img/logo.png")}
                className="logo"
                alt="logo"
                width="150"
                height="150"
              />
            </div>
          </Link>

          {/* SEARCH */}
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className="search-result" tabIndex="-1" {...attrs}>
                <div className="wrapper-search">
                  <h4 className="search-tittle">Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </div>
              </div>
            )}
          >
            <div className="search">
              <input className="input-search" placeholder="Tìm kiếm" />

              <span className="search-span"></span>

              <button className="search-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>

          {/* GIỎ HÀNG */}
          <div className="login">
            <div className="giohang">
              <Link to={"/cart"} className="cart">
                <div className="icon-container">
                  <FontAwesomeIcon
                    className="giohang-icon"
                    icon={faBagShopping}
                  />
                  <span className="cart_badge">0</span>
                </div>
              </Link>
            </div>

            {login ? (
              <div className="current-user">
                <span>Xin chào, </span>
                <span className="userName">{localStorage.getItem("name")}</span>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("name");
                    setLogin(false);
                    window.location.reload();
                  }}
                >
                  <FontAwesomeIcon
                    className="logout"
                    title="Log Out"
                    icon={faRightFromBracket}
                  />
                </button>
              </div>
            ) : (
              <div className="action">
                <Link to={"/login"}>
                  <button className="btn-login">Đăng nhập</button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* HEADER-MENU */}
        <div className="header-black">
          <div className="black-wrapper">
            <ul className="black-content">
              <Link to={"/"} className="non-textdecoration">
                <li className="black-li">TRANG CHỦ</li>
              </Link>

              <Link to={"/sanpham"} className="non-textdecoration">
                <li className="black-li">SẢN PHẨM</li>
              </Link>

              <li className="black-li">BLOG</li>
              <li className="black-li">LIÊN HỆ</li>
              <li className="black-li">GIỚI THIỆU</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
