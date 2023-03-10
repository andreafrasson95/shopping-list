const mongoose = require('mongoose');

const ItemSchema=new mongoose.Schema({
    name: {type:String, required:true},
    quantity: Number,
    description: String

});

module.exports= mongoose.model('item', ItemSchema);