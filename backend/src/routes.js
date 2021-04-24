const express = require('express')
const route = express.Router()
const knex = require('./database')
const ProductsController = require('./Controllers/ProductsController')
const CommentsController = require('./Controllers/CommentsController')

route.get('/',ProductsController.index)
route.get('/show/:Id',ProductsController.show)
//route.get('/comments',commentsController.index)
route.get('/show/:Id/comments',CommentsController.show)
route.post('/comment/new',CommentsController.store)
route.delete('/delete/:Id',CommentsController.delete)

module.exports = route