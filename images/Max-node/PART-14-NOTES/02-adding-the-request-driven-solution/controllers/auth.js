exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',

    // `req.isLoggedIn` is `undefined`, as we discussed below subsequent req is `new` request.
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {

    // here we set `isLoggedIn` to get this user authenticated, but this will keep on working untill we send res, when we send res, it finished and next subsequent req will be new request(every http/https request is stateless protocol).
    req.isLoggedIn = true;
    res.redirect('/');
  };
