import React, { useState, useEffect } from "react";
import "./css components/admin.css";
import axios from "axios";

function Admin() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState();
  const [id, setID] = useState();
  const [sanPham, setSanPham] = useState({
    name: "",
    company: "",
    price: "",
    gender: "",
    picture: "1.png",
    stockCount: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products/?limit=100")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const themSP = () => {
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:3000/api/v1/products/", sanPham, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const suaSP = () => {
    const token = localStorage.getItem("token");
    axios
      .patch("http://localhost:3000/api/v1/products/" + id, sanPham, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const xoaSP = () => {
    const token = localStorage.getItem("token");
    axios
      .delete("http://localhost:3000/api/v1/products/" + id, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="table-admin">
      <div className="tittle">QUẢN LÝ SẢN PHẨM</div>
      <div className="table-content">
        <div className="admin-left">
          <h1>Danh sách sản phẩm</h1>

          {data.map((ten) => {
            const { _id, name, price, company, gender, picture, stockCount } =
              ten;
            return (
              <div
                key={_id}
                className="ds"
                onClick={() => {
                  setDisplay(name);
                  setSanPham({
                    name,
                    price,
                    company,
                    gender,
                    picture,
                    stockCount,
                  });
                  setID(_id);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>

        {data.map((ten) => {
          const { _id, picture, company, name, price, gender, stockCount } =
            ten;
          if (name === display) {
            return (
              <div className="admin-right" key={_id}>
                <h1>Thông tin chi tiết</h1>

                <div className="header-right">
                  <div className="detail">
                    <div className="khungpic">
                      <img
                        className="pic"
                        src={require(`./images/hot/${picture}`)}
                        alt=""
                      />
                    </div>
                    <ul className="detail-chitiet">
                      <li>
                        <b>
                          <u>ID:</u>
                        </b>{" "}
                        {_id}
                      </li>
                      <li>
                        <b>
                          <u>Thương hiệu:</u>
                        </b>{" "}
                        {company}
                      </li>
                      <li>
                        <b>
                          <u>Tên sản phẩm:</u>
                        </b>{" "}
                        {name}
                      </li>
                      <li>
                        <b>
                          <u>Giá:</u>
                        </b>{" "}
                        {price}
                      </li>
                      <li>
                        <b>
                          <u>Phân loại:</u>
                        </b>{" "}
                        {gender}
                      </li>
                      <li>
                        <b>
                          <u>Tồn kho:</u>
                        </b>{" "}
                        {stockCount}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bottom-right">
                  {/* Màn hình render sửa sản phẩm */}
                  <div className="detail-right">
                    <ul className="fix-chitiet">
                      <li>
                        <b>Thương hiệu:</b>
                        <select
                          className="sellect-brand"
                          onChange={(e) => {
                            setSanPham({
                              ...sanPham,
                              company: e.target.value,
                            });
                          }}
                        >
                          <option selected disabled>
                            {sanPham.company || "Chọn thương hiệu"}
                          </option>
                          <option>Casio</option>
                          <option>Citizen</option>
                          <option>Doxa</option>
                          <option>Tissot</option>
                          <option>Seiko</option>
                          <option>Rolex</option>
                        </select>
                      </li>
                      <li>
                        <b>Tên sản phẩm:</b>
                        <input
                          placeholder={name}
                          onChange={(e) => {
                            setSanPham({
                              ...sanPham,
                              name: e.target.value,
                            });
                          }}
                        ></input>
                      </li>
                      <li>
                        <b>Giá:</b>
                        <input
                          placeholder={price}
                          onChange={(e) => {
                            setSanPham({
                              ...sanPham,
                              price: e.target.value,
                            });
                          }}
                        ></input>
                      </li>
                      <li>
                        <b>Phân loại:</b>
                        <select
                          className="sellect-brand"
                          onChange={(e) => {
                            setSanPham({
                              ...sanPham,
                              gender: e.target.value,
                            });
                          }}
                        >
                          <option selected disabled>
                            {sanPham.gender || "Chọn giới tính"}
                          </option>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </li>
                      <li>
                        <b>Tồn kho:</b>
                        <input
                          placeholder={stockCount}
                          onChange={(e) => {
                            setSanPham({
                              ...sanPham,
                              stockCount: e.target.value,
                            });
                          }}
                        ></input>
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
                    <button className="add" onClick={themSP}>
                      Thêm sản phẩm
                    </button>
                    <button className="save" onClick={suaSP}>
                      Lưu lại
                    </button>
                    <button className="del" onClick={xoaSP}>
                      Xóa sản phẩm
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Admin;
