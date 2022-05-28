import React from "react";
import './css components/productList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faHeart, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductList() {
    return (
        <section className="section products">
            <div className="products-layout container">
                <div className="col-1-of-4">
                    <div>
                        <div className="block-title">
                            <h3>Giới tính</h3>
                        </div>

                        <ul className="block-content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Nam</span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Nữ</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="block-title">
                            <h3>Thương hiệu</h3>
                        </div>

                        <ul className="block-content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Casio</span>
                                    <span className="brand-box">
                                        <span className="box">10</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Citizen</span>
                                    <span className="brand-box">
                                        <span className="box">7</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Doxa</span>
                                    <span className="brand-box">
                                        <span className="box">3</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Tissot</span>
                                    <span className="brand-box">
                                        <span className="box">3</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Seiko</span>
                                    <span className="brand-box">
                                        <span className="box">5</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Rolex</span>
                                    <span className="brand-box">
                                        <span className="box">8</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-3-of-4">
                    <form action="" >
                        {/* <div className="item">
                            <label for="sort-by" ><b>Sort By</b></label>
                            <select name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Name</option>
                                <option value="number">Price</option>
                                <option value="search_api_relevance">Relevance</option>
                                <option value="created">Newness</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="order-by" ><b>Order</b></label>
                            <select name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div> */}
                        <a href="">Thêm sản phẩm</a>
                    </form>

                    <div className="product-layout">

                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/1.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                                </div>

                                <ul className="side-icons">
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                    <span><FontAwesomeIcon icon={faHeart} /></span>
                                    <span><FontAwesomeIcon icon={faSlidersH} /></span>
                                </ul>
                            </div>
                            <div className="bottom">
                                <a href="">Casio EFV-550L-1AVUDF – Nam – Quartz (Pin) – Dây Da</a>
                                <div className="price">
                                    <span>3.529.000 ₫</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/2.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/3.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/5.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/8.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/9.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/10.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/11.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/12.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
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
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/13.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                                </div>

                                <ul className="side-icons">
                                    <span><FontAwesomeIcon icon={faSearch} /></span>
                                    <span><FontAwesomeIcon icon={faHeart} /></span>
                                    <span><FontAwesomeIcon icon={faSlidersH} /></span>
                                </ul>
                            </div>
                            <div className="bottom">
                                <a href="">Citizen Nam – Eco-Drive (Năng Lượng Ánh Sáng) – Kính Sapphire – Dây Kim Loại (BM6774-51A)</a>
                                <div className="price">
                                    <span>7.820.000 ₫</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/14.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                                </div>

                                <ul className="side-icons">
                                    <span><FontAwesomeIcon icon={faSearch} /></span>
                                    <span><FontAwesomeIcon icon={faHeart} /></span>
                                    <span><FontAwesomeIcon icon={faSlidersH} /></span>
                                </ul>
                            </div>
                            <div className="bottom">
                                <a href="">Tissot T063.637.36.037.00 – Nam – Kính Sapphire – Quartz (Pin) – Dây Da</a>
                                <div className="price">
                                    <span>14.060.000 ₫</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img-container">
                                <img src={require("./images/hot/15.png")} alt="" />
                                <div className="addCart">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                                </div>

                                <ul className="side-icons">
                                    <span><FontAwesomeIcon icon={faSearch} /></span>
                                    <span><FontAwesomeIcon icon={faHeart} /></span>
                                    <span><FontAwesomeIcon icon={faSlidersH} /></span>
                                </ul>
                            </div>
                            <div className="bottom">
                                <a href="">Citizen RA-AR0001S10B – Nam – Kính Sapphire – Automatic (Tự Động) – Dây Kim Loại</a>
                                <div className="price">
                                    <span>10.170.000 ₫</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CHUYỂN TRANG */}
                    <ul className="pagination">
                        <span>1</span>
                        <span>2</span>
                        <span className="icon">››</span>
                        <span className="last">Last »</span>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProductList;