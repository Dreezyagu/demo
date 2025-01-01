const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Dr33zmann', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;