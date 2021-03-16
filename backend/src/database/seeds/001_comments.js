
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, idProduct: 1 ,name:"Gil" ,comment:"this amazing product",stars:5,photo:"link photo"},
        {id: 2, idProduct: 1 ,name:"Jozie" ,comment:"this product .... no coments",stars:3,photo:"link photo two"},
      ]);
    });
};
