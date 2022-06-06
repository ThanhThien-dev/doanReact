import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './css components/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

    const [show, setShow] = useState(true);
    const [isClickDN, setIsClickDN] = useState(true);
    const [isClickDK, setIsClickDK] = useState(false);

    return (
        <div className="register">
            <div class="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome to TimmerMan</h3>
                    <p>The Home for the stylish!</p>
                </div>

                <div className="col-md-9 register-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            {isClickDN ? (
                                <div className="nav-link active" onClick={() => setShow(true)}>
                                    Đăng nhập
                                </div>
                            ) : (
                                <div
                                    className="nav-link"
                                    onClick={() => {
                                        setShow(true);
                                        setIsClickDN(true);
                                        setIsClickDK(false);
                                    }}
                                >
                                    Đăng nhập
                                </div>
                            )}
                        </li>
                        <li className="nav-item">
                            {isClickDK ? (
                                <div className="nav-link active" onClick={() => setShow(false)}>
                                    Đăng ký
                                </div>
                            ) : (
                                <div
                                    className="nav-link"
                                    onClick={() => {
                                        setShow(false);
                                        setIsClickDN(false);
                                        setIsClickDK(true);
                                    }}
                                >
                                    Đăng ký
                                </div>
                            )}
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">

                        {show ? (
                            //    LOGIN
                            <div className="tab-pane fade show active">
                                <h3 className="register-heading">ĐĂNG NHẬP</h3>
                                <div className="containerLogin">
                                    <label for="uname"><b>Tài khoản</b></label>
                                    <input className="holder" type="text" placeholder="Enter Username" name="uname" />
                                    <p></p>
                                    <label for="uname"><b>Mật khẩu</b></label>
                                    &nbsp;&nbsp;<input className="holder" type="password" placeholder="Enter Password" name="psw" />
                                    <p></p>
                                </div>
                                <input className="check" type="checkbox" name="remember" /> <span className="rmb">Ghi nhớ tài khoản</span>

                                <span className="forgot">Quên mật khẩu?</span>
                                <p></p>

                                <Link to={"/admin"}>
                                <button className="Alert" type="submit" id="Alert">ĐĂNG NHẬP</button>
                                </Link>

                            </div>
                        ) : (
                            // REGISTER
                            <div className="tab-pane fade show active">
                                <h3 className="register-heading">ĐĂNG KÝ</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Tên đăng nhập *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Họ và tên *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email *" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Mật khẩu *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Nhập lại mật khẩu *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Số điện thoại *" />
                                        </div>
                                        <button className="AlertRegister" type="submit" id="Alert">ĐĂNG KÝ</button>
                                    </div>
                                </div>
                            </div>
                        )
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;