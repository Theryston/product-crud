const product = require('./product')

module.exports = {
  indexState: (req, res) => {
    res.status(200)
    res.json({message: 'ok'})
  },
  
  productCreate: (req, res) => {
    product.create(req, res)
  },
  
  productRead: (req, res) => {
    product.read(req, res)
  },
  
  productReadById: (req, res) => {
    product.readById(req, res)
  },
  
  productUpdate: (req, res) => {
    product.update(req, res)
  },
  
  productDelete: (req, res) => {
    product.delete(req, res)
  }
}