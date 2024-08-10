const User = require("../database/models/User");

module.exports = async (req, res, next) => {
  try {
    // Fetch user from database
    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.redirect("/");
    }

    next();
  } catch (error) {
    console.error("Error fetching user:", error);
    res.redirect("/");
  }

  // verify user
  // if user is valid, permit request.
  // else redirect.
};
