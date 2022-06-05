import React from "react";
import "./css components/admin.css";

const product = require('./data/admin.json')

function Admin() {
  return (
    <div className="table-admin">
      <div className="tittle">QUẢN LÝ SẢN PHẨM</div>
      <div className="table-content">
        <div className="left">
          <h1>Danh sách sản phẩm</h1>

          {product.map((ten) => {
            const { id, name } = ten;
            return <div key={id} className="ds">
              {name}
            </div>
          })}

        </div>

        {product.map((ten) => {
          const { id, picture, brand, name, price, sex, quantity } = ten;
          if (id === 1) {
            return <div className="right">
              <h1>Thông tin chi tiết</h1>

              <div className="header-right">
                <div className="detail">
                  <div className="khungpic">
                    <img className="pic" src={require(`./images/hot/${picture}`)} alt="" />
                  </div>
                  <ul key={id} className="detail-chitiet">
                    <li><b><u>Thương hiệu:</u></b> {brand}</li>
                    <li><b><u>Tên sản phẩm:</u></b> {name}</li>
                    <li><b><u>Giá:</u></b> {price}</li>
                    <li><b><u>Phân loại:</u></b> {sex}</li>
                    <li><b><u>Số lượng:</u></b> {quantity}</li>
                  </ul>
                </div>

              </div>

              <div className="bottom-right">

                {/* Màn hình render sửa sản phẩm */}
                <div className="detail-right">
                  <ul className="fix-chitiet">
                    <li><b>Thương hiệu:</b>
                      <select className="sellect-brand">
                        <option selected disabled>Chọn thương hiệu</option>
                        <option>Casio</option>
                        <option>Citizen</option>
                        <option>Doxa</option>
                        <option>Tissot</option>
                        <option>Seiko</option>
                        <option>Rolex</option>
                      </select>
                    </li>
                    <li><b>Tên sản phẩm:</b>
                      <input placeholder={name}></input>
                    </li>
                    <li><b>Giá:</b>
                      <input placeholder={price}></input>
                    </li>
                    <li><b>Phân loại:</b>
                    <select className="sellect-brand">
                        <option selected disabled>Chọn giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                      </select>
                    </li>
                    <li><b>Số lượng:</b>
                      <input type={'number'} min={0} placeholder={quantity}></input>
                    </li>
                  </ul>
                </div>

                {/* Màn hình render thêm sản phẩm
            <div className="detail-right">
              <ul className="fix-chitiet">
                <li><b>Thương hiệu:</b>
                  <input></input>
                </li>
                <li><b>Tên sản phẩm:</b>
                  <input></input>
                </li>
                <li><b>Giá:</b>
                  <input></input>
                </li>
                <li><b>Phân loại:</b>
                  <input></input>
                </li>
                <li><b>Số lượng:</b>
                  <input></input>
                </li>
              </ul>
            </div> */}

                <div className="option">
                  <button className="add">Thêm sản phẩm</button>
                  <button className="save">Lưu lại</button>
                  <button className="del">Xóa sản phẩm</button>
                </div>

              </div>
            </div>
          }
        })}
      </div>
    </div>
  );
}

export default Admin;
