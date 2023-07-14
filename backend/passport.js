const GOGGLE_CLIENT_ID =
  '380459012738-q8no9gmsdr2i2p59hmk98va5l7m4ktku.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://www.example.com/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
