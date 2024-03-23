const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name :{
    type : String,
    required : [true, 'Name Is requireed '],
    trim : true,
    maxlength : [30, 'Name must be less than 30 characters ']
   },
   email: {
    type: String,
    required : [true, 'Email is required '],
    unique: true,
    trim : true
   },

   password : {
    type: Number,
    required : [true, "Password is Required "],
    minLength : [8, 'Password should be Of Minimun 8 characters !'],
   }
})

module.exports = mongoose.model("user", UserSchema)