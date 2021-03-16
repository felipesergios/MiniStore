
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'rowValue1',describe:"Describe for one",price:200.99,photo:"link photo1"},
        {id: 2, name: 'rowValue2',describe:"Describe for two",price:20.99,photo:"link photo2"},
        {id: 3, name: 'rowValue3',describe:"Describe for tree",price:2.89,photo:"link photo3"},
      ]);
    });
};
