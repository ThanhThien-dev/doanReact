import React from "react";
import { Link } from "react-router-dom";
import './css components/productList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faHeart, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const product = require('./data/product.json')

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
                                        <span className="box">7</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Citizen</span>
                                    <span className="brand-box">
                                        <span className="box">3</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Doxa</span>
                                    <span className="brand-box">
                                        <span className="box">2</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Tissot</span>
                                    <span className="brand-box">
                                        <span className="box">2</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Seiko</span>
                                    <span className="brand-box">
                                        <span className="box">1</span>
                                    </span>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span className="brand-name">Rolex</span>
                                    <span className="brand-box">
                                        <span className="box">0</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-3-of-4">
                    <form action="" >
                        <div className="item">
                            <label for="sort-by" ><b>Sắp xếp</b></label>
                            <select name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Giá</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="order-by" ><b>Thứ tự</b></label>
                            <select name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">Tăng dần</option>
                                <option value="DESC">Giảm dần</option>
                            </select>
                        </div>
                        <a href="">Lọc</a>
                    </form>

                    <div className="product-layout">

                        {product.map((sanpham) => {
                            const { id, picture, name, price } = sanpham;

                            return <div key={id} className="product">
                                <div className="img-container">
                                    <img src={require(`./images/hot/${picture}`)} alt="" />
                                    <Link className="add" to={"/chitiet"}>
                                        <div className="addCart">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </div>
                                    </Link>

                                    <ul className="side-icons">
                                        <span><FontAwesomeIcon icon={faSearch} /></span>
                                        <span><FontAwesomeIcon icon={faHeart} /></span>
                                        <span><FontAwesomeIcon icon={faSlidersH} /></span>
                                    </ul>
                                </div>
                                <div className="bottom">
                                    <div className="bottomName">{name}</div>
                                    <div className="price">
                                        <span>{price}</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>

                    {/* CHUYỂN TRANG */}
                    <ul className="pagination">
                        <span className="last">First</span>
                        <span>1</span>
                        <span>2</span>
                        <span className="last">Last »</span>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProductList;