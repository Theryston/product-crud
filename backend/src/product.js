const Product = require('../database/Product')

module.exports = {
  create: async (req, res) => {
    var product = req.body
    try {
      var newProduct = await Product.create({
        name: product.name, price: product.price
      })
      res.status(201)
      res.json(newProduct)
    } catch(err) {
      res.status(500)
      res.json({
        err: err
      })
    }
  },

  read: async (req, res) => {
    try {
      var products = await Product.findAll({
        attributes: ['name', 'price', 'id'], row: true
      })
      res.status(200)
      res.json(products)
    } catch(err) {
      res.status(500)
      res.json({
        err: err
      })
    }
  },

  readById: async (req, res) => {
    var {id} = req.params
    try {
      var products = await Product.findOne({
        where: {
          id: id
        }})
      res.status(200)
      res.json(products)
    } catch(err) {
      res.status(500)
      res.json({
        err: err
      })
    }
  },
  
  update: async (req, res) => {
    var {id} = req.params
    var data = req.body
    try { 
      await Product.update({...data}, {where: {id: id}})
      res.status(200)
      res.json({message: 'Produto atualizado com sucesso!'})
    } catch(err) {
      res.status(500)
      res.json({err: err})
    }
  },
  
  delete: async (req, res) => {
    var {id} = req.params
    try {
     await Product.destroy({where: {id: id}})
     res.status(200)
     res.json({message: 'Produto deletado com sucesso!'})
    } catch (err) {
      res.status(500)
      res.json({err: err})
    }
  }
}