const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String },
    price2: { type: Number, required: true },
    strik: { type: String, required: true },
    img: { type: Array, required: true },
    desc1: { type: String, required: true },
    desc2: { type: String, required: true },
    desc3: { type: String, required: true },
    desc4: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: String, required: true },
    off: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },

})

const Product = mongoose.model("product", productSchema)
module.exports = Product;