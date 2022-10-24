const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
  },
  price: {
    type: Number,
    
  },
});
