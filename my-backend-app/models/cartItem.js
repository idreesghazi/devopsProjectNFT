const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  quantity: Number,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Replace 'User' with the actual name of your user model
  },

});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;