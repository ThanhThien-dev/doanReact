import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css components/productDetail.css';
import { faHeart, faSearch, faShoppingCart, faSlidersH } from "@fortawesome/free-solid-svg-icons";
const product = require('./data/product.json')

function ProductDetail() {
  return (
    <>
      <section class="section product-detail">

        {product.map((thongtin) => {
          const {id, picture, name, price} = thongtin;
          return <div key = {id} class="details container">
          <div class="left">
            <div class="contain">
              <div class="main">
                <img src={require(`./images/hot/${picture}`)} alt="" />
                
              </div>
            </div>

            {/* <div class="thumbnails">
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
            </div> */}
          </div>
          <div class="right">

            <h1>{name}</h1>
            <div class="price">{price}</div>

            <form class="form">
              <input type="text" placeholder="1" />
              <a href="Thanh toán.html" class="addCart">Add To Cart</a>
            </form>
          </div>
        </div>
        })}

        
      </section>


      {/* CÁC SẢN PHẨM LIÊN QUAN */}
      <section class="section related-products">
        <div class="title">
          <h2>Related Products</h2>
          <span>Be exclusive, Be Devine, Be yourself</span>
        </div>
        <div class="product-layout container">
        {product.map((sanpham) => {
                    const {id, picture, name, price, hot} = sanpham;

                    if(hot === true && id <= 7){
                    return <div key = {id} className="product">
                    <div className="img-container">
                        <img src={require(`./images/hot/${picture}`)} alt="" />
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
                        <a href="Chi tiết sản phẩm.html">{name}</a>
                        <div className="price">
                            <span>{price}</span>
                        </div>
                    </div>
                </div>
                }
                })}
        </div>
      </section>
    </>
  );
}

export default ProductDetail;