import React, { Component } from "react";
import './css components/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import {Button} from 'react-bootstrap'




function Login() {
    return(
        <div className="container register">
                <div class="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome to YOFA</h3>
                        <p>The Home for the stylish you!</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Signup</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                {/* LOGIN */}
								<h3 className="register-heading">LOGIN</h3>
                            <div className="container">
								<label  for="uname"><b>Username</b></label>
								<input type="text" placeholder="Enter Username" name="uname" />

								<label for="uname"><b>Password</b></label>
								<input type="password" placeholder="Enter Password" name="psw" />
								

     				 			<input type="checkbox" name="remember" /> Remember me <p></p>

								<span classNameName="forgot" ><a href="#" >Forgot password?</a></span> <p></p>
                                
								<Button type="submit" id="Alert">LOGIN</Button>
								<script language="javascript">
									var button = document.getElementById("Alert");
										button.onclick = function(){
										// alert("Username or password is incorrect!");
										}
								</script>
							</div>
                            </div>
                            
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 {/* REGISTER */}
								<h3  className="register-heading">REGISTER</h3>
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
                                            <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
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
                                                <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your Hobby?</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Answer *" value="" />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register now"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    </div>
    )
}

export default Login;