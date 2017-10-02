'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const quoteSchema = mongoose.Schema({
    day:{type:String, required:true},
    quotes:{type:Array, required:true}
})

const horoscopeSchema = mongoose.Schema({
    sign: {type: String, required: true},
    horoscopes: {type: Array, ref:'Quotes', required: true}
})

horoscopeSchema.methods.apiRepr = function() {
    return {
        sign: this.sign,
        horoscopes: this.horoscopes
    }
}

const userSchema = mongoose.Schema({
    facebookId: {type: String},
    accessToken: {type: String},
    name: {type: String},
    email: {type: String},
    displayName: {type: String},
    password:{type:String},
    firstName:{type:String},
    lastName: {type:String},
    username:{type:String}
})

userSchema.methods.apiRepr = function() {
    return{
        id: this._id,
        facebookId: this.facebookId,
        name: this.name,
        email: this.email,
        displayName: this.displayName,
        password:this.password,
        firstName:this.firstName,
        lastName:this.lastName
    }
}

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
}
  
userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);
const Quotes = mongoose.model('Quotes', quoteSchema);
const Horoscope = mongoose.model('Horoscope', horoscopeSchema);
module.exports = {Horoscope, User};