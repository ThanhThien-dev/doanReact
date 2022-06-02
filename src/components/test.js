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
                            <div className="tab-pane fade show">
                                <h3 className="register-heading">REGISTER</h3>
                                <div className="containerLogin">
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="UserName *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone *" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your Hobby?</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Answer *" value="" />
                                        </div>
                                        <input type="submit" className="btnRegister" value="Register now" />
                                    </div>
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