import passport from 'passport';
import { signin, signup } from './controllers/auth/authentication';
import passportService from './services/passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export default (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.post('/signin', requireSignin, signin);
  app.post('/signup', signup);
};
