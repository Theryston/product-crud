const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes')
const cors = require('cors')

// bodyParser config
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.use(cors())

// Routes
app.get('/', routes.indexState)

app.post('/products', routes.productCreate)

app.get('/products', routes.productRead)

app.get('/products/:id', routes.productReadById)

app.put('/products/:id', routes.productUpdate)

app.delete('/products/:id', routes.productDelete)


// running server
let port = 3001
app.listen(port, () => {
  console.log(`> server listening on port ${port}`)
})