const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Example route: Get the logged-in user's profile
router.get('/profile', protect, (req, res) => {
  console.log('Profile route hit');
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    role: req.user.role,
  });
});

module.exports = router;
