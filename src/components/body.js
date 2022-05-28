import React from "react";
import './css components/Body.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faShoppingCart, faSlidersH } from "@fortawesome/free-solid-svg-icons";

function Body() {
    return (
        <body>

            <img src={require("./images/banner.jpg")} alt="" width={1686} />

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
                    <span>Matching style and class with luxury and comfort</span>
                </div>

                <div className="product-layout">
                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/1.png")} alt="" />
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
                            <a href="Chi tiết sản phẩm.html">Casio EFV-550L-1AVUDF – Nam – Quartz (Pin) – Dây Da</a>
                            <div className="price">
                                <span>3.529.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/2.png")} alt="" />
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
                            <a href="">Casio EFR-S567D-1AVUDF – Nam – Kính Sapphire – Quartz (Pin) – Dây Kim Loại</a>
                            <div className="price">
                                <span>5.182.000 ₫</span>
                                <span className="cancel">5.982.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/3.png")} alt="" />
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
                            <a href="">Casio AQ-S810W-1A4VDF – Nam – Kính Nhựa – Tough Solar – Dây Cao Su</a>
                            <div className="price">
                                <span>3.356.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/4.png")} alt="" />
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
                            <a href="">Casio D154TWH – Nam – Kính Sapphire – Dây Da – Limited Edition</a>
                            <div className="price">
                                <span>2.098.000 ₫</span>
                                <span className="cancel">2.999.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/5.png")} alt="" />
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
                            <a href="">Casio A168WG-9WDF – Nam/Nữ – Kính Nhựa – Quartz (Pin) – Dây Kim Loại</a>
                            <div className="price">
                                <span>1.678.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/6.png")} alt="" />
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
                            <a href="">Citizen NH8394-70H – Nam – Automatic (Tự Động) – Dây Kim Loại – Mặt Số 40mm</a>

                            <div className="price">
                                <span>9.177.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/7.png")} alt="" />
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
                            <a href="">Casio AEQ-110W-3AVDF – Nam – Kính Nhựa – Quartz 3ADF110W (Pin) – Dây Cao Su</a>

                            <div className="price">
                                <span>1.506.000 ₫</span>
                                <span className="cancel">1.900.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/8.png")} alt="" />
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
                            <a href="">Doxa D124RBKW – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại</a>
                            <div className="price">
                                <span>31.390.000 ₫</span>
                                <span className="cancel">33.390.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/9.png")} alt="" />
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
                            <a href="">Casio EFV-540D-2AVUDF – Nam – Quartz (Pin) – Automatic (Tự Động) –  Dây Kim Loại</a>
                            <div className="price">
                                <span>3.529.000 ₫</span>
                                <span className="cancel">3.829.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/10.png")} alt="" />
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
                            <a href="">Tissot T101.410.11.041.00 – Nam – Kính Sapphire – Quartz (Pin) – Dây Kim Loại</a>
                            <div className="price">
                                <span>8.600.000 ₫</span>
                                <span className="cancel">9.600.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/11.png")} alt="" />
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
                            <a href="">Seiko SRZ520P1 – Nữ – Quartz 124W (Pin) – Automatic (Tự Động) – Dây Kim Loại</a>
                            <div className="price">
                                <span>6.840.000 ₫</span>
                                <span className="cancel">7.240.000 ₫</span>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img-container">
                            <img src={require("./images/hot/12.png")} alt="" />
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
                            <a href="">Doxa D124TSVW – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại</a>
                            <div className="price">
                                <span>31.390.000 ₫</span>
                                <span className="cancel"> &nbsp;32.390.000 ₫</span>
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