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
            const {id, name} = ten;
            return <div key = {id} className="ds">
              {name}
            </div>
          })}
          
        </div>

        <div className="right">
          <h1>Thông tin chi tiết</h1>
          <div className="header-right">
          <div className="khungpic">
          <img className="pic" src={require("./images/hot/1.png")} alt="" />
          </div>
          </div>

          {/* {product.map((thongtin) => {
            const {id, picture, brand, name, price, quantity} = thongtin;

            return <div key = {id}>
              <div className="pic">
                <img src={require="./images/hot/1.png"} />
              <img src={require(`./images/hot/${picture}`)} alt="" />
              </div>
            </div>
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Admin;
