exports.getLogin = (req, res, next) => {
  // here we are getting cookeis from req header.
  // and this cookeis is coming from client side.
  const isLoggedIn = req
    .get('Cookie')
    .split(';')[1]
    .trim()
    .split('=')[1];
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  // here we are creating cookies and send to the client, it automatically store in client's cookeis.
  // and when-ever subsequent request begins on client, it automatically attachs the cookies in header.  
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
};
