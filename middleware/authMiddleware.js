const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = await User.findByPk(decoded.id);
    if (!req.user) return res.status(401).json({ error: 'User is not found' });

    if (req.user.mustChangePassword && req.path !== '/change-password') {
      return res.status(403).json({ error: 'You need to change your password' });
    }

    next();
  } catch (err) {
    res.status(401).json({ error: 'Wrong token' });
  }
};
