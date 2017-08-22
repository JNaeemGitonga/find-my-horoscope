'use strict';

const mongoose = require('mongoose');



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
    facebookId: {type: String, required: true},
    accessToken: {type: String},
    name: {type: String},
    email: {type: String},
    displayName: {type: String}
})

userSchema.methods.apiRepr = function() {
    return{
        id: this._id,
        facebookId: this.facebookId,
        name: this.name,
        email: this.email,
        displayName: this.displayName
    }
}

const User = mongoose.model('User', userSchema);
const Quotes = mongoose.model('Quotes', quoteSchema);
const Horoscope = mongoose.model('Horoscope', horoscopeSchema);
module.exports = {Horoscope, User};