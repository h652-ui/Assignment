const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    productSKU : {
        type : Number,
        required : true
    },
    productName : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        default : 0
    }
}, {timestamps : true})

module.exports = mongoose.model('product', productSchema)