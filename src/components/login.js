import React, { Component } from "react";
import { useState } from "react";
import './css components/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';



function Login() {

    const [show, setShow] = useState(true);

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
                        <li className="nav-item" onClick={() => setShow(true)}>
                            <a className="nav-link active" href="">Đăng nhập</a>
                        </li>
                        <li className="nav-item" onClick={() => setShow(false)}>
                            <a className="nav-link" href="">Đăng kí</a>
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
                                    <input type="checkbox" name="remember" /> <span className="rmb">Ghi nhớ tài khoản</span>

                                    <span className="forgot" ><a href="#" >Quên mật khẩu?</a></span>
                                    <p></p>

                                    <button className="Alert" type="submit" id="Alert">ĐĂNG NHẬP</button>
                                    <script language="javascript">
                                        var button = document.getElementById("Alert");
                                        button.onclick = function(){
                                            // alert("Username or password is incorrect!");
                                        }
                                    </script>
                                </div>
                            </div>
                        ) : (
                            // REGISTER
                            <h2>dhkadhkj</h2>
                            // <div className="tab-pane fade show">
                            //     <h3 className="register-heading">REGISTER</h3>
                            //     <div className="row register-form">
                            //         <div className="col-md-6">
                            //             <div className="form-group">
                            //                 <input type="text" className="form-control" placeholder="UserName *" value="" />
                            //             </div>
                            //             <div className="form-group">
                            //                 <input type="text" className="form-control" placeholder="Full Name *" value="" />
                            //             </div>
                            //             <div className="form-group">
                            //                 <input type="email" className="form-control" placeholder="Email *" value="" />
                            //             </div>
                            //             <div className="form-group">
                            //                 <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                            //             </div>
                            //         </div>
                            //         <div className="col-md-6">
                            //             <div className="form-group">
                            //                 <input type="password" className="form-control" placeholder="Password *" value="" />
                            //             </div>
                            //             <div className="form-group">
                            //                 <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                            //             </div>
                            //             <div className="form-group">
                            //                 <select className="form-control">
                            //                     <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                            //                     <option>What is your Birthdate?</option>
                            //                     <option>What is Your Hobby?</option>
                            //                     <option>What is your Pet Name?</option>
                            //                 </select>
                            //             </div>
                            //             <div className="form-group">
                            //                 <input type="text" className="form-control" placeholder="Answer *" value="" />
                            //             </div>
                            //             <input type="submit" className="btnRegister" value="Register now" />
                            //         </div>
                            //     </div>
                            // </div>
                        )
                        }

                        </div>
                </div>

                    

            </div>

        </div>
    )
}

export default Login;