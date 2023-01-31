const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://ferdous629:F80rOifgSb7NP7FX@cluster0.za8jnwo.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose