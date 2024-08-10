module.exports = (req, res) => {
  // console.log(req.flash("data"));
  res.render("register", {
    data: req.flash("data")[0],
    errors: req.flash("registrationErrors"),
  });
};
