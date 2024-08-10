const bcrypt = require("bcrypt");
const User = require("../database/models/User");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  // try to find the user
  const user = await User.findOne({ email });
  if (user) {
    // compare passwords.
    const same = await bcrypt.compare(password, user.password);
    if (same) {
      req.session.userId = user._id;
      console.log(same);
      res.redirect("/");
    } else {
      res.redirect("/auth/login");
    }
  } else {
    return res.redirect("/auth/login");
  }
};

// async (email, password) => {
//     try {
//       const user = await User.findOne({ email });
//       // try to find the user
//       if (user) {
//         const same = await bcrypt.compare(password, user.password);
//         // compare passwords.
//         if (same) {
//           req.session.userId = user._id;
//           res.redirect("/");
//         } else {
//           res.redirect("/auth/login");
//         }
//       } else {
//         res.redirect("/auth/login");
//       }
//     } catch (error) {
//       console.error("Invalid email or passwords", error);
//       res.redirect("/auth/login");
//     }
//   };
