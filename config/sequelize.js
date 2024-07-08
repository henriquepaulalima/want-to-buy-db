const Sequelize = require('sequelize');
const dbConfig = require('./db.config');
const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
