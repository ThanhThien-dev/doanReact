import React from "react";


function Header() {
    return (

        <header className="wrapper">

            {/* HEADER-LOGO */}
            <div className="header-white">
                <div className="header-logo">
                    <img src={require("./img/logo.png")} className="logo" alt="logo" width="150" height="80" />
                </div>  

                <div className="search">
                    <input className="input-search" placeholder="Tìm kiếm" />
                    <button className="search-btn">
                        <BsSearch  width="52px" height="100%"/>
                        {/* //import fontawsome icon */}
                    </button>
                </div>

                <div className="action">

                </div>
            </div>

            {/* HEADER-MENU */}
            <div className="header-black">
                <div className="black-bg">
                    
                </div>
            </div>

        </header>
    );
}

export default Header;