import React from "react";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container-footer">
                <div className="row">
                    {/* LOGO */}
                    <div className="col">
                    <img src={require("./img/logo.png")} className="logo" alt="logo" width="150" height="150" />
                    </div>

                    {/* COL1 */}
                    <div className="col">
                        <h4>LIÊN HỆ</h4>
                        <ul className="list">
                            <li>Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</li>
                            <li>Hotline: (028) 3725.2002</li>
                            <li>Email: info@uit.edu.vn</li>
                        </ul>
                    </div>

                    {/* COL2 */}
                    <div className="col">
                        <h4>FOLLOW US</h4>
                        <ul className="list">
                            <li>Follow để không bỏ lỡ bất kì ưu đãi nào từ chúng tôi</li>
                            <li>ICON</li>
                        </ul>
                    </div>

                    {/* COL3 */}
                    <div className="col">
                        <h4>ĐĂNG KÝ</h4>
                        <ul className="list">
                            <li>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</li>
                            <li>TextBox Email</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy; Bản quyền thuộc về Thiết kế website
                        <img className="icon-copyRight" src={require("./img/copyRight.png")} alt="copyRight" /> 
                         TP Company!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;