import React, { Component } from "react";
import './css components/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';



function Test() {


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
                        <li className="nav-item" >
                            <a className="nav-link active" href="">Đăng nhập</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="">Đăng kí</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">

                        
                            {/* LOGIN */}
                            <div className="tab-pane fade show active">
                                <h3 className="register-heading">ĐĂNG KÍ</h3>
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
                                    <button className="AlertRegister" type="submit" id="Alert">ĐĂNG KÍ</button>
                                    </div>
                                </div>
                            </div>
                      
                        
                        

                        </div>
                </div>

                    

            </div>

        </div>
    )
}

export default Test;