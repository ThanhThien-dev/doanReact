import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css components/productDetail.css';
import { faHeart, faSearch, faShoppingCart, faSlidersH } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  return (
    <>
      <section class="section product-detail">
        <div class="details container">
          <div class="left">
            <div class="contain">
              <div class="main">
                <img src="images/img.chi tiết sản phẩm/sp1.jpg" alt="" />
                <img src="images/img.chi tiết sản phẩm/sp2.jpg" alt="" />
                <img src="images/img.chi tiết sản phẩm/sp3.jpg" alt="" />
                <img src="images/img.chi tiết sản phẩm/sp4.jpg" alt="" />
              </div>
            </div>

            <div class="thumbnails">
              <div class="thumbnail">
                <a href="#" data-id="1"><img src="images/img.chi tiết sản phẩm/sp1.jpg" alt="" /></a>
              </div>
              <div class="thumbnail">
                <a href="#" data-id="2"><img src="images/img.chi tiết sản phẩm/sp2.jpg" alt="" /></a>
              </div>
              <div class="thumbnail">
                <a href="#" data-id="3"><img src="images/img.chi tiết sản phẩm/sp3.jpg" alt="" /></a>
              </div>
              <div class="thumbnail">
                <a href="#" data-id="4"><img src="images/img.chi tiết sản phẩm/sp4.jpg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="right">

            <h1>Victorinox Suit</h1>
            <div class="price">$1500</div>

            <form class="form">
              <input type="text" placeholder="1" />
              <a href="Thanh toán.html" class="addCart">Add To Cart</a>
            </form>
          </div>
        </div>
      </section>


      {/* CÁC SẢN PHẨM LIÊN QUAN */}
      <section class="section related-products">
        <div class="title">
          <h2>Related Products</h2>
          <span>Be exclusive, Be Devine, Be yourself</span>
        </div>
        <div class="product-layout container">
          <div class="product">
            <div class="img-container">
              <img src={require("./images/hot/1.png")} alt="" />
              <div class="addCart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <ul class="side-icons">
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span><FontAwesomeIcon icon={faSlidersH} /></span>
              </ul>
            </div>
            <div class="bottom">
              <a href="">Chelsea boots</a>
              <div class="price">
                <span>$900</span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="img-container">
            <img src={require("./images/hot/2.png")} alt="" />
              <div class="addCart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <ul class="side-icons">
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span><FontAwesomeIcon icon={faSlidersH} /></span>
              </ul>
            </div>
            <div class="bottom">
              <a href="">LKM08 - Louis Luxury</a>
              <div class="price">
                <span>$850</span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="img-container">
            <img src={require("./images/hot/3.png")} alt="" />
              <div class="addCart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <ul class="side-icons">
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span><FontAwesomeIcon icon={faSlidersH} /></span>
              </ul>
            </div>
            <div class="bottom">
              <a href="">Valentino Garavani</a>
              <div class="price">
                <span>$680</span>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="img-container">
            <img src={require("./images/hot/4.png")} alt="" />
              <div class="addCart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>

              <ul class="side-icons">
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span><FontAwesomeIcon icon={faSlidersH} /></span>
              </ul>
            </div>
            <div class="bottom">
              <a href="">LV Men Casual</a>
              <div class="price">
                <span>$1049</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;