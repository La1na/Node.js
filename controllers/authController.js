const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (user) => jwt.sign({ id: user.id, role: user.role }, 'secret');

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;
    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ error: 'Email уже зарегистрирован' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, role: 'user', mustChangePassword: false });
    res.json({ message: 'Регистрация успешна' });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Incorrect credentials' });
    }
    const token = generateToken(user);
    res.json({ token });
  },

  changePassword: async (req, res) => {
    const { newPassword } = req.body;
    const hash = await bcrypt.hash(newPassword, 10);
    await req.user.update({ password: hash, mustChangePassword: false });
    res.json({ message: 'Password updated' });
  },

  deleteAccount: async (req, res) => {
    const { password } = req.body;
    const valid = await bcrypt.compare(password, req.user.password);
    if (!valid) return res.status(400).json({ error: 'Wrong password' });

    await req.user.destroy();
    res.json({ message: 'Account deleted' });
  },

  adminAccess: (req, res) => {
    res.json({ message: 'Admin access confirmed' });
  },

  changeEmail: async (req, res) => {
    const { newEmail, password } = req.body;
    const valid = await bcrypt.compare(password, req.user.password);
    if (!valid) return res.status(400).json({ error: 'Wrong password' });

    const exists = await User.findOne({ where: { email: newEmail } });
    if (exists) return res.status(400).json({ error: 'Email already in use' });

    await req.user.update({ email: newEmail });
    res.json({ message: 'Email updated' });
  }
};
