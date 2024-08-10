const mongoose = require("mongoose");
const Post = require("./database/models/Post");

mongoose.connect("mongodb://localhost/node-js-test-blog");

Post.find({}, (error, posts) => {
  console.log(error, posts);
});

// Post.findById("5b309ceca84e99bbb6601904", (error, post) => {
//   console.log(error, post)
// })

// Post.findByIdAndUpdate("5b309b35bd7950bab178d912", {
//   title: 'My first blog post title lorem ipsum'
// }, (error, post) => {
//   console.log(error, post)
// })

// Post.findByIdAndRemove("5b309ceca84e99bbb6601904", (error) => {
//   console.log(error)
// })
// encType="multipart/form-data"

// Post.create({
//   title: 'My second blog post',
//   description: 'Second Blog post description',
//   content: 'Second Lorem ipsum content.'
// }, (error, post) => {
//   console.log(error, post)
// })
<div>
<!-- Post preview-->
                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 24, 2023
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                    <!-- Post preview-->
                    <div class="post-preview">
                        <a href="post.html"><h2 class="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 18, 2023
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                    <!-- Post preview-->
                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Science has not yet mastered prophecy</h2>
                            <h3 class="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on August 24, 2023
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                    <!-- Post preview-->
                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Failure is not an option</h2>
                            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on July 8, 2023
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
</div>