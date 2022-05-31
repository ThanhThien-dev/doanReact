import React from "react";
import './css components/payment.css';
const product = require('./data/product.json')

function Payment() {
    return (
        <div className="cart">
            <table>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Thành giá</th>
                </tr>

                <tr>
                    <td>

                        {product.map((sanpham) => {
                            const {} = sanpham;
                            return <div className="cart-info">
                            <img src="images/Product/Main - thanh toán.jpg" alt="" />
                            <div>
                                <p>Victorinox Suit</p>
                                <span>Price: $1500</span>
                                <br />
                                <a href="Trang chủ.html">remove</a>
                            </div>
                        </div>
                        })}
                    </td>
                    <td><input type="number" value="2" min="1" /></td>
                    <td>$3000</td>
                </tr>

                 {/* <tr>
                     <td>
                         <div className="cart-info">
                             <img src="images/img.thanh toán/pd1.jpg" alt="" />
                             <div>
                                 <p>LKM08 - Louis Luxury</p>
                                 <span>Price: $850</span>
                                 <br />
                                 <a href="#">remove</a>
                             </div>
                         </div>
                     </td>
                     <td><input type="number" value="0" min="1" /></td>
                     <td>$0</td>
                 </tr>

                 <tr>
                     <td>
                         <div className="cart-info">
                             <img src="images/img.thanh toán/pd2.jpg" alt="" />
                             <div>
                                 <p>Chelsea boots</p>
                                 <span>Price: $900</span>
                                 <br />
                                 <a href="#">remove</a>
                             </div>
                         </div>
                     </td>
                     <td><input type="number" value="0" min="1" /></td>
                     <td>$0</td>
                 </tr>

                 <tr>
                     <td>
                         <div className="cart-info">
                             <img src="images/img.thanh toán/pd3.jpeg" alt="" />
                             <div>
                                 <p>Luxury Watches</p>
                                 <span>Price: $750</span>
                                 <br />
                                 <a href="#">remove</a>
                             </div>
                         </div>
                     </td>
                     <td><input type="number" value="0" min="1" /></td>
                     <td>$0</td>
                 </tr>

                 <tr>
                     <td>
                         <div className="cart-info">
                             <img src="images/img.thanh toán/pd4.jpeg" alt="" />
                             <div>
                                 <p>LV Men Casual</p>
                                 <span>Price: $1049</span>
                                 <br />
                                 <a href="#">remove</a>
                             </div>
                         </div>
                     </td>
                     <td><input type="number" value="0" min="1" /></td>
                     <td>$0</td>
                 </tr> */}
            </table>
        

            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>$3000</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$3300</td>
                    </tr>
                </table>
                <a href="Trang chủ.html" className="checkout btn" id="Alert">Proceed To Checkout</a>
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