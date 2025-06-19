const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
  res.render('login', { error: null, email: '' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render('login', {
      error: 'Please enter both email and password.',
      email
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.render('login', {
      error: 'No user found with this email.',
      email
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.render('login', {
      error: 'Incorrect password.',
      email
    });
  }

  req.session.user = user;
  return res.redirect(user.isAdmin ? '/admin/products' : '/');
});

module.exports = router;