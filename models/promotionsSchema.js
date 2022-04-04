const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promoSchema = new Schema(
  {
    id: Number,
    name: String,
    image: String,
    label: String,
    price: String,
    description: String,
    featured: Boolean,
  },
  { timestamps: true }
);

const Promotions = mongoose.model("Promotions", promoSchema);
module.exports = Promotions;
