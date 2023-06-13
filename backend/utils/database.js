const Sequelize = require('sequelize');

const  sequelize = new Sequelize('cart','root','Sourabh8839',{
    dialect:'mysql',
    host:'localhost'
});


module.exports =sequelize;

