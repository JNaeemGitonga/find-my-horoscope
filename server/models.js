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
    accessToken: {Type: String},
    name: {type: String}
})

userSchema.methods.apiRepr = function() {
    return{
        facebookId: this.facebookId,
        // name: this.name,
        id: this._id
    }
}

const User = mongoose.model('User', userSchema);
const Quotes = mongoose.model('Quotes', quoteSchema);
const Horoscope = mongoose.model('Horoscope', horoscopeSchema);
module.exports = {Horoscope, User};