const User = require("../database/models/User");

module.exports = async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect("/");
  } catch (error) {
    const registrationErrors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );

    req.flash("registrationErrors", registrationErrors);
    req.flash("data", { ...req.body });
    res.redirect("/auth/register");
  }
};
