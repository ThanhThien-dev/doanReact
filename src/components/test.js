import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Test() {
    return (
        <footer className="bg-footer">
            <div className="container">
                {/* VỀ CHÚNG TÔI */}
                <div className="noi-dung about">
                    <h2>Về Chúng Tôi</h2>
                    <p> TP TIMMERMAN đã tồn tại và phát triển đến ngày nay và đang dần vươn lên trở thành 1 trong
                        những chuỗi bán lẻ đồng hồ hàng đầu ở Việt Nam. Cùng với tiêu chí luôn đề cao những
                        giá trị cao nhất cho khách hàng, TP TIMMERMAN không chỉ mang đến những phiên bản đồng hồ chính hãng
                        với chất lượng tốt nhất, mà còn mang lại sự an tâm, tin cậy dành cho Quý khách hàng. Chúng tôi
                        không kinh doanh đồng hồ đơn thuần mà chúng tôi chia sẻ niềm đam mê và sáng tạo.
                        TP TIMMERMAN sẽ là cầu nối của cộng đồng yêu thích đồng hồ – nơi mà có thể mọi thành viên
                        có thể kết nối, gắn kết cùng 1 tình yêu – đó là đồng hồ.</p>
                    <ul className="social-icon">
                        <li><FontAwesomeIcon icon={faFacebookSquare} /></li>
                        <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                        <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
                        <li><FontAwesomeIcon icon={faYoutubeSquare} /></li>
                    </ul>
                </div>

                {/* LINK */}
                <div className="noi-dung links">
                    <h2>Đường Dẫn</h2>
                    <ul>
                        <li><a href="#">Trang Chủ</a></li>
                        <li><a href="#">Về Chúng Tôi</a></li>
                        <li><a href="#">Thông Tin Liên Lạc</a></li>
                        <li><a href="#">Dịch Vụ</a></li>
                        <li><a href="#">Điều Kiện Chính Sách</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="noi-dung contact">
                    <h2>Thông Tin Liên Hệ</h2>
                    <ul className="info">
                        <li>
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                            <span>Phường Linh Trung<br />
                                TP.Thủ Đức, TP.Hồ Chí Minh<br />
                                Việt Nam</span>
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <p>Hotline: (028) 3725.2002
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                0967.247.555.
                            </p>
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <p>Email: info@uit.edu.vn</p>
                        </li>
                        <li>
                            <form className="form">
                                <input type="email" className="form__field" placeholder="Đăng Ký Subscribe Email" />
                                <button type="button" className="btn btn--primary  uppercase">Gửi</button>
                            </form>
                        </li>
                    </ul>
                </div>



            </div>

            <div className="copyRight">
                <p className="col-sm">
                    <hr/>
                    <br/>
                    &copy; Bản quyền thuộc về đội ngũ thiết kế website
                    <img className="icon-copyRight" src={require("./img/copyRight.png")} alt="copyRight" />
                    TP Company!
                </p>
            </div>
        </footer>
    )
}
export default Test;