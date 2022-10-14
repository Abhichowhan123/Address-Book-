const mongoose= require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2')
// Address book schema
const Book=  mongoose.model('Book',{
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},

})

// Book.plugin(mongoosePaginate)
module.exports = {Book}