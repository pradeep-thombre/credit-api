const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const User = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "omicron",
};

passport.use(
  new JWTStrategy(opts, (jwtPayload, done) => {
    User.findById(jwtPayload._id, (err, user) => {
      if (err) console.log("Error finding through JWT");
      if (user) return done(null, user);
      else return done(null, false);
    });
  })
);

module.exports = passport;
