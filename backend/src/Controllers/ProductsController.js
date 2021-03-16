const knex = require('../database')
module.exports={
    async index(req,res){
        const results = await knex('products')
        return res.json(results)
    },

    async show(req,res,next){
        const id = req.params.Id
       try {
        const data = await knex('products').where('id', id)
        return res.json(data)
       } catch (error) {
           next(error)
       }
    }
}