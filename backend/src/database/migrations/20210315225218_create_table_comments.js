
exports.up = function(knex) {
    return knex.schema.createTable('comments',function(table){
        table.string('id').primary()
        //IdProducts relation ? 
        table.string('idProduct').notNullable()
        table.string('name').notNullable()
        table.string('comment').notNullable()
        table.integer('stars').notNullable()
        table.string('photo').notNullable()   
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};

