const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const WishlistItem = require('./wishlistItems');
const wishlistItems = WishlistItem(sequelize, Sequelize.DataTypes);
const db = {
  wishlistItems,
  sequelize
};

module.exports = db;
