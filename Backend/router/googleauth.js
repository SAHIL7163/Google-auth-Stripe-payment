const express =require('express');
const router =express.Router();
const passport = require('passport')
const User = require('../model/User');
const jwt = require('jsonwebtoken');
  
router.get('/',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
 async(req, res) => {
    // After successful authentication, redirect the user to the returnTo URL stored in session
    // Extract the tokens from the passport callback
  try {
    // After successful authentication, generate tokens
    const user = req.user;
    const roles = Object.values(user.roles).filter(Boolean);

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: user.username,
          email: user.email,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // Update user's refreshToken in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Set refresh token as a cookie
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000,
    });
    console.log(accessToken);
    console.log(refreshToken);
    // Redirect the user to the frontend
   // res.redirect('http://localhost:3000/');
   res.redirect(`http://localhost:3000`);
  } catch (error) {
    console.error('Error handling Google callback:', error);
    // Handle errors if needed
    res.status(500).send('Internal Server Error');
  }
}
);
module.exports = router ;