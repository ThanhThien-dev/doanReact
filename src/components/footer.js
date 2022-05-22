import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container-footer">
                {/* LOGO
                <div className="footer-logo">
                    <img src={require("./img/logo.png")} alt="logo" />
                </div> */}

                {/* COL1 */}
                <div className="lienhe">
                    <h2>LIÊN HỆ</h2>
                    <ul className="list">
                        <li>Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</li>
                        <li>Hotline: (028) 3725.2002</li>
                        <li>Email: info@uit.edu.vn</li>
                    </ul>
                </div>

                {/* COL2 */}
                <div className="follow">
                    <h2>FOLLOW US</h2>
                    <ul className="list">
                        <li>Follow để không bỏ lỡ bất kì ưu đãi nào từ chúng tôi</li>
                        <li>ICON</li>
                    </ul>
                </div>

                {/* COL3 */}
                <div className="dangky">
                    <h2>ĐĂNG KÝ</h2>
                    <ul className="list">
                        <li>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</li>
                        <li>TextBox Email</li>
                    </ul>
                </div>

            </div>
            {/* <hr />
            <div className="row">
                <p className="col-sm">
                    &copy; Bản quyền thuộc về Thiết kế website
                    <img className="icon-copyRight" src={require("./img/copyRight.png")} alt="copyRight" />
                    TP Company!
                </p>
            </div> */}
        </footer>
    )
}

export default Footer;