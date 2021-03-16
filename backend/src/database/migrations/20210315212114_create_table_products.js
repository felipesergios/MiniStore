
exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('describe').notNullable()
        table.decimal('price', 9,2).notNullable()
        table.string('photo').notNullable()   
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
