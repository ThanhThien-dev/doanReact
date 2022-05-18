import React from "react";

function Header() {
    return (

        <div className="header-container">
            <div className="header-top">
                <div className="header-top-inside">
                    <div className="header-logo">
                        <img src={require("./img/logo.png")} className="logo" alt="logo" width="200" height="90" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;