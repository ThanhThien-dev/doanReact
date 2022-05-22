import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountItem from "./data/accountItem";

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    const currentUser = false;

    return (
        < header className="container" >
            <div className="wrapper">

                {/* HEADER-LOGO */}
                <div className="header-white">
                    <div className="header-logo">
                        <img src={require("./img/logo.png")} className="logo" alt="logo" width="150" height="150" />
                    </div>

                    {/* SEARCH */}
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className="search-result" tabIndex='-1' {...attrs}>
                                <div className="wrapper-search">
                                    <h4 className="search-tittle">
                                        Accounts
                                    </h4>
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
                            <span className="sl">SL: 0</span>
                            <FontAwesomeIcon className="giohang-icon" icon={faBagShopping} />
                        </div>

                        {currentUser ? (
                            <div className="current-user">
                                <span>Xin chào, </span>
                                <span className="userName">userName</span>
                            </div>
                        ) : (

                        <div className="action">
                            <button className="btn-login">Đăng nhập</button>
                        </div>

                        )}

                    </div>
                </div>

                {/* HEADER-MENU */}
                <div className="header-black">
                    <div className="black-wrapper">
                        <ul className="black-content">
                            <li className="black-li">TRANG CHỦ</li>
                            <li className="black-li">SẢN PHẨM HOT</li>
                            <li className="black-li">BLOG</li>
                            <li className="black-li">LIÊN HỆ</li>
                            <li className="black-li">GIỚI THIỆU</li>
                        </ul>

                    </div>
                </div>

            </div>
        </header >
    );
}

export default Header;