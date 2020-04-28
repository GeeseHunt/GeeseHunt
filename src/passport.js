import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import config from './config';
import User from './data/models/User';

const toUserObject = user => ({
  // eslint-disable-next-line no-underscore-dangle
  id: user._id,
  displayName: user.displayName,
  avatarUrl: user.avatarUrl,
});

/**
 * Sign in with Facebook.
 */
passport.use(
  new FacebookStrategy(
    {
      clientID: config.auth.facebook.id,
      clientSecret: config.auth.facebook.secret,
      callbackURL: '/login/facebook/return',
      profileFields: [
        'id',
        'displayName',
        'photos',
        'link',
        'locale',
        'timezone',
      ],
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      const { id, provider } = profile;

      User.findOne({
        oauth: {
          $elemMatch: { id, provider },
        },
      }).then(foundUser => {
        if (foundUser) {
          done(null, toUserObject(foundUser));
          return;
        }

        const { displayName, photos = [] } = profile;
        const { value: avatarUrl } = photos[0] || { value: '' };

        User.create(
          { displayName, avatarUrl, oauth: [{ id, provider }] },
          (err, newUser) => {
            if (err) done(err);
            else done(null, toUserObject(newUser));
          },
        );
      });
    },
  ),
);

export default passport;
