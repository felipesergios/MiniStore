const knex = require('../database')
module.exports={
    async index(req,res){
        const results = await knex('comments')
        return res.json(results)
    },

    async show(req,res,next){
        const id = req.params.Id
       try {
        const data = await knex('comments').where('idProduct', id)
        return res.json(data)
       } catch (error) {
           next(error)
       }
    },

    async store(req,res){
        // console.log(req.body.username);
         const { idProduct,comment,stars,photo ,name}=req.body;
         const newcomment = await knex('comments').insert([{idProduct,comment,stars,photo,name}])
         
 
         return res.json(newcomment);
     },

     async delete(req,res,next){
        const id = req.params.Id
       try {
        const data = await knex('comments').where('id', id).del()
        return res.json({msg:"deleted"})
       } catch (error) {
           next(error)
       }
    },

}


//knex('accounts')
//.where('activated', false)
//.del()