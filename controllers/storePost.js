const path = require("path");
const cloudinary = require("cloudinary").v2;
const Post = require("../database/models/Post");

module.exports = async (req, res) => {
  const { image } = req.files;

  const uploadPath = path.resolve(__dirname, "..", "public/posts", image.name);

  try {
    // Move the file to the upload path
    await image.mv(uploadPath);

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(uploadPath);

    // Create the post
    await Post.create({
      ...req.body,
      image: result.secure_url,
      author: req.session.userId,
    });
    // Redirect to home
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};
