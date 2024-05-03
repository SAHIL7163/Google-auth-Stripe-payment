const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/User');
const passport = require("passport");
const bcrypt = require('bcrypt');



const initializePassport = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3500/auth/google/callback"
    },
    async function(googleaccessToken, googlerefreshToken, profile, cb) {
        try {
            // Find or create a user based on the Google profile's id
            let user = await User.findOne({ email: profile.emails[0].value });
          //if(user){ const roles = Object.values(user.roles).filter(Boolean) ;}
        
            console.log(profile);
            if (!user) {
                // If the user doesn't exist, return an error
                const hashedpwd = await bcrypt.hash(profile.id,10) ;
                const roles = {User : 2001};

                user = await User.create({
                   "username": profile.displayName,
                   "password":hashedpwd, 
                    "email":profile.emails[0].value ,
                    "roles" : roles
                });
                console.log(user);
                await user.save();
            }
             cb(null, user);
             } catch (error) {
            return cb(error);
           }
    }));
}

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

module.exports = { initializePassport};


