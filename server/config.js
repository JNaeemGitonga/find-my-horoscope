'use-strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://localhost/horoscopes';
                      
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET; 
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;
exports.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID