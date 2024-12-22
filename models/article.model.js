const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter article name"],
      },
  
      type: {
        type: String,
        required: [true, "Please enter article type"],
      },
  
      image: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Product = mongoose.model("Article", ArticleSchema);
  
  module.exports = Product;