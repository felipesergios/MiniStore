
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Notebook ',describe:"poderoso e pronto para o trabalho e games",price:200.99,photo:"https://s2.glbimg.com/pQzfWPi0vJzvuvyQRGl4dg7EBIA=/0x0:3744x3744/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/z/L/KjDi5VTM645RcM3BBusA/pc301-07-1-.jpg"},
        {id: 2, name: 'Ipad 8 gen',describe:"Descrição e versatilidade descrevem o novo Ipad ",price:20.99,photo:"https://www.mastertronic.com.br/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad-air-3.png"},
        {id: 3, name: 'Amazfit GTR',describe:"Elegancia para seu treino",price:2.89,photo:"https://i.zst.com.br/images/smartwatch-xiaomi-amazfit-gtr-47-0-mm-photo902848941-12-32-3c.jpg"},
      ]);
    });
};
