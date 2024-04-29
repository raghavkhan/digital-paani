const User = require("../model/User");
const CustomError = require('../errors');
const { StatusCodes } = require("http-status-codes");
const {
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
} = require("../utils");

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({
    success: true,
    message: "All Users",
    count: users.length,
    data: users,
  });
};

const getSingleUser = async (req, res) => {
  const users = await User.findOne({ _id: req.params.id }).select("-password");

  if (!users) {
    throw new CustomError.NotFoundError(
      `No user with this id :${req.params.id}`
    );
  }
  checkPermissions(req.user, users._id);
  res.status(StatusCodes.OK).json({ users });
};
const showCurrentUser = async (req, res) => {
  
  res.status(StatusCodes.OK).json({ users: req.user });
};
const updateUser = async (req, res) => {
  const { name: userName, userId, role } = req.user;
  const { name, email } = req.body;
  if (!name || !email) {
    throw new CustomError.BadRequestError(
      `please provide name and email for updation`
    );
  }
  
  const users = await User.findOne({ _id: userId });
  users.email = email;
  users.name = name;
  await users.save();

  const tokenUser = createTokenUser({ users });
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ users: tokenUser });
};
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("please provide both values");
  }
  const users = await User.findOne({ _id: req.user.userId });
  const isPasswordCorrect = await users.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Old Password does not match");
  }
  users.password = newPassword;
  await users.save();
  res.status(StatusCodes.OK).json({ users });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
