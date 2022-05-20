import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 3000)
    }, [])

    return (

        < header className="container" >
            <div className="wrapper">

                {/* HEADER-LOGO */}
                <div className="header-white">
                    <div className="header-logo">
                        <img src={require("./img/logo.png")} className="logo" alt="logo" width="150" height="80" />
                    </div>

                    {/* SEARCH */}
                    <Tippy
                    interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className="search-result" tabIndex='-1' {...attrs}>
                                Ket qua
                            </div>
                        )}
                    >

                        <div className="search">
                            <input className="input-search" placeholder="Tìm kiếm" />

                            <span class="search-span"></span>

                            <button className="search-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    <div className="action">

                    </div>
                </div>

                {/* HEADER-MENU */}
                <div className="header-black">
                    <div className="black-bg">

                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;