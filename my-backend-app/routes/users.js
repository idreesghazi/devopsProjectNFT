const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import your user model

// router.get('/register', async (req, res) => {
//   try {
//     res.send('Hello from register');
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//Handle user registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the provided password matches the stored password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // At this point, the login is successful
    res.status(200).json({ message: 'Login successful', email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
