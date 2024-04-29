const CustomError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  try {
    const payload = isTokenValid({ token });
    const { name, userId, role } = payload;
    req.user = { name, userId, role };
    next();
  } catch (err) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    console.log(roles);
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        `Unauthorized to access this route`
      );
    }
    next();
  };
};


module.exports = { authenticateUser, authorizePermissions };