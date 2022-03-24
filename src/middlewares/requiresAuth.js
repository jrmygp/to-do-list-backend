const requiresAuth = (req, res, next) => {
  if (req.headers.cookie) {
    console.log("User logged in");
    return next();
  }
  res.status(401).json({
      message: "User unauthorized, must log in to access this route!"
  })
};

module.exports = requiresAuth;
