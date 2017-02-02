import jwt from 'jwt-simple';
import User from '../../models/user';
import config from '../../config';

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret); // iat - issued at time
};

export function signin(req, res) {
  res.send({ token: tokenForUser(req.user) });
}

export function signup(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email,
      password,
    });

    user.save((err) => {
      if (err) { return next(err); }
    });

    res.json({ token: tokenForUser(user) });
  });
}
