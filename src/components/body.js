import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faShoppingCart, faSlidersH } from "@fortawesome/free-solid-svg-icons";
// Glidejs
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />;
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css" />;



function Body() {
    return (
        <body>
            <section className="section promotion">

                {/* DANH MỤC SẢN PHẨM */}
                <div className="title">
                    <h2>THƯƠNG HIỆU NỔI TIẾNG</h2>
                    <span>Be exclusive, Be Devine, Be yourself</span>
                </div>

                <div className="promotion-layout container">
                    <div className="promotion-item">
                        <img src={require("./images/brand/casio.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>CASIO</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <img src={require("./images/brand/citizen.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>CITIZEN</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <img src={require("./images/brand/doxa.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>DOXA</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <img src={require("./images/brand/tissot.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>TISSOT</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <img src={require("./images/brand/seiko.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>SEIKO</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <img src={require("./images/brand/rolex.jpg")} alt="" />
                        <div className="promotion-content">
                            <h3>ROLEX</h3>
                            <a href="">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="section products">
                <div className="title">
                    <h2>SẢN PHẨM HOT</h2>
                    <span>Matching style and className with luxury and comfort</span>
                </div>

                <div className="product-layout">
                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/home.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="Chi tiết sản phẩm.html">Victorinox Suit</a>
                            <div className="price">
                                <span>$1500</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd2.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">LV Men Casual</a>
                            <div className="price">
                                <span>$1049</span>
                                <span className="cancel">$1050</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd3.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Chelsea boots</a>
                            <div className="price">
                                <span>$900</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd4.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">LKM08 - Louis Luxury</a>
                            <div className="price">
                                <span>$850</span>
                                <span className="cancel">$900</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd5.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Tokyo Talkies</a>
                            <div className="price">
                                <span>$1349</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd6.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Black Realize Belt</a>

                            <div className="price">
                                <span>$500</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd7.jpg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Valentino Garavani</a>

                            <div className="price">
                                <span>$680</span>
                                <span className="cancel">$700</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd8.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Ankle Boots</a>
                            <div className="price">
                                <span>$599</span>
                                <span className="cancel">$600</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd8.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Ankle Boots</a>
                            <div className="price">
                                <span>$599</span>
                                <span className="cancel">$600</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd8.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Ankle Boots</a>
                            <div className="price">
                                <span>$599</span>
                                <span className="cancel">$600</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd8.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Ankle Boots</a>
                            <div className="price">
                                <span>$599</span>
                                <span className="cancel">$600</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/pd8.jpeg")} alt="" />
                            <div className="addCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>

                            <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                <span><FontAwesomeIcon icon={faSlidersH} /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="">Ankle Boots</a>
                            <div className="price">
                                <span>$599</span>
                                <span className="cancel">$600</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ADVERT */}
            <section className="section advert">
                <div className="advert-layout container">
                    <div className="item ">
                        <img src={require("./images/type/formen.png")} alt="" />
                            <div className="content left">
                                <span>Đẳng cấp phái mạnh</span>
                                <h3>FOR MEN</h3>
                                <a href="">View Collection</a>
                            </div>
                    </div>
                    <div className="item">
                        <img src={require("./images/type/forwomen.png")} alt="" />
                            <div className="content  right">
                                <span>Sang trọng quý phái</span>
                                <h3>FOR WOMEN</h3>
                                <a href="">View Collection</a>
                            </div>
                    </div>
                </div>
            </section>

            {/* BRANDS */}
            {/* <section className="section brands">
                <div className="title">
                    <h2>Design by Thien</h2>
                    <span>There’s a bit of the West in all of us.</span>
                </div>

                <div className="brand-layout container">
                    <div className="glide" id="glide1">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <img src={require("./images/brand1.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand2.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand3.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand4.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand5.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand6.png")} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={require("./images/brand7.png")} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section> */}
        </body>
    )
}

export default Body;