import React from "react";

function Header() {
    return (

        <header className="wrapper">
            <div className="header-top">
                <div className="header-top-inside">
                    <div className="header-logo">
                        <img src={require("./img/logo.png")} className="logo" alt="logo" width="200" height="90" />
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;