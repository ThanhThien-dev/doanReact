const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, UnauthenticatedError } = require("../error");

const register = async (req, res) => {
  console.log(req.body);
  const user = await User.create({ ...req.body });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, msg: "Đăng ký thành công" });
};

const login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new UnauthenticatedError("Invalid Username");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Password");
  }

  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name }, token, msg: "Đăng nhập thành công" });
};

const dashboard = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user);
};

module.exports = { login, dashboard, register };
