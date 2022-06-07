import React from "react";
import { Link } from "react-router-dom";
import './css components/payment.css';
const product = require('./data/product.json')

function Payment() {
    return (
        <div className="cart">
            <table>
                <tr className="tp">
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Thành giá</th>
                </tr>

                
                        {product.map((sanpham) => {
                    
                            const {picture, name, price} = sanpham;
                            return <tr className="trPayment">
                            <td>
                                <div className="cart-info">
                            <img src={require(`./images/hot/${picture}`)} alt="" />
                            <div>
                                <p>{name}</p>
                                <span>Price: {price}</span>
                                <br />
                                <a href="Trang chủ.html">Xóa khỏi giỏ hàng</a>
                            </div>
                        </div>
                        
                    </td>
                    <td className="bang"><input type={'number'} min={1} placeholder={1} /></td>
                    <td>{price}</td>
                </tr>
                })}

                
            </table>
        

            <div className="total-price">
                <table>
                    <tr>
                        <td>Tổng cộng:</td>
                        <td>$3000</td>
                    </tr>
                    
                </table>
                <Link to={"/"} className="checkout btn" id="Alert">Thanh toán</Link>
                {/* <script language="javascript">
            var button = document.getElementById("Alert");
            button.onclick = function(){
            alert("You ordered succeed. Your order will be processed as soon as possible!");
            }
		  	</script> */}
            </div>
                        

                        
        </div>
    );
}

export default Payment;