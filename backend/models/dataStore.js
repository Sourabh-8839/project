
const Sequelize = require('sequelize');

const sequelize = require('../utils/database');


const Products = sequelize.define('products',{
    
    id:{
        type:Sequelize.INTEGER,
        allownull:false,
        primaryKey:true,
        autoIncrement:true,

    },

    productName:{
        type:Sequelize.STRING,
        allownull:false,

    },
    price:Sequelize.STRING
}
);

module.exports = Products;