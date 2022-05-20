import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function Header() {
    return (
<header className="container">
        <div className="wrapper">

            {/* HEADER-LOGO */}
            <div className="header-white">
                <div className="header-logo">
                    <img src={require("./img/logo.png")} className="logo" alt="logo" width="150" height="80" />
                </div>

                {/* SEARCH */}
                <div className="search">
                    <input className="input-search" placeholder="Tìm kiếm" />

                    <span class="search-span"></span>

                    <Tippy>
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    </Tippy>
                </div>

                <div className="action">

                </div>
            </div>

            {/* HEADER-MENU */}
            <div className="header-black">
                <div className="black-bg">

                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;