exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(req.session);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {

  //  In the line req.session.userId = user.id, multiple things are happening simultaneously:
  
  // Creating a Session on the Server:
    //-->  req.session is an `object` provided by the session middleware (like express-session). When you set a property on req.session, the middleware creates a session on the server if one doesn't exist for this client. It manages this behind the scenes.
  
  // Preparing Cookies (Session ID) for the Client:
    // --> When you set a property on req.session, the session middleware generates a unique session ID and includes it in the HTTP response headers as a cookie. This cookie is sent to the client, and it typically has a name like "sessionID" or similar.
  
  // Adding Information to the Session:
    // --> You're adding information (the user ID in this case) to the session object on the server. This information is associated with the generated session ID. This way, the server can later retrieve this data when the client sends back the session ID via the cookie.

    // req.session.userId = user.id; // Store user ID in the session
      //--> So, with a single line of code, you're indeed creating a session, preparing the necessary cookie for the client, and adding information to the session on the server.

      // NOTE THAT session data are stored in the memory(node is responsible to do that)
  req.session.isLoggedIn = true;

  res.redirect('/');
};
