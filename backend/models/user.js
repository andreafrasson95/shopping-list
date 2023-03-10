const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');

const UserSchema=new mongoose.Schema({
    username: {type:String, required:true, unique: true},
    password: {type: String, required:true},
    description: String

});

UserSchema.methods.createJWT = function () {
    return jwt.sign(
      { userId: this._id, name: this.username },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '5m',
      }
    )
  }

  UserSchema.methods.comparePassword = async function (canditatePassword) {
    if(canditatePassword === this.password)
    return 0;
    else return -1;
  }

module.exports= mongoose.model('user', UserSchema);