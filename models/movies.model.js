const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name: String ,
    image: String,
    category: String,
    rate: Number
})


module.exports = mongoose.model("Movie", movieSchema)