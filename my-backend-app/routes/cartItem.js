// Import necessary modules and models
const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartItem'); // Import your CartItem model
const User = require('../models/user'); // Import your User model

// router.get('/checkout', async (req, res) => {
//       try {
//         res.send('Hello from checkout');
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     });
// Define a route to handle checkout
router.post('/checkout', async (req, res) => {
    try {
      // Extract data from the request
      const { cartItems, userEmail } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email: userEmail });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Create cart items associated with the user
      const cartItemPromises = cartItems.map(async (cartItemData) => {
        const cartItem = new CartItem({
          ...cartItemData,
          user: user._id, // Associate cart item with the user
        });
  
        await cartItem.save();
        return cartItem;
      });
  
      // Wait for all cart items to be saved
      const savedCartItems = await Promise.all(cartItemPromises);
  
      // Respond with success message or saved cart items
      res.json({ success: true, savedCartItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during checkout.' });
    }
  });
  
  
// Export the router
module.exports = router;
