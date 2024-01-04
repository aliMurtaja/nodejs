exports.getPosts = (req, res, next) => {
  // res.status(200).json({
  //   posts: [{ title: 'First Post', content: 'This is the first post!' }]
  // });
  return res.status(200).json([{ title: 'First Post', content: 'This is the first post!' }]);
  res.status(300).json([{ title: 'First Post', content: 'This is the first post!|' }]);
  console.log("reached 2dd")
};

exports.createPost = (req, res, next) => {
  console.log("reached")
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
