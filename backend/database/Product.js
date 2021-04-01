const connection = require('./connection')
const sequelize = require('sequelize');

const Product = connection.define('products', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  price: {
    type: sequelize.STRING,
    allowNull: false
  }
})


Product.sync({
  force: false
})


module.exports = Product;