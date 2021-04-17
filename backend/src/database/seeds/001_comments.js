
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {idProduct: 1 ,name:"Gil" ,comment:"esse computador é maravilhoso !! ",stars:5,photo:"https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"},
        { idProduct: 1 ,name:"Jozie" ,comment:"achei meio bom :/",stars:3,photo:"https://w7.pngwing.com/pngs/874/871/png-transparent-pop-art-comics-female-comic-book-beauty-avatar-blue-painted-face.png"},
        {idProduct:2,name:"Paulo",comment:"Adoro os produtos apple",stars:5,photo:"https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"},
        {idProduct:2,name:"Marry",comment:"Bom pra tudo",stars:4,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkc4Mxh5IGh1thS5Be1TKXa7SMzm52mlNhLniFZEFYW_JcwiD1eU7soUGcuUJ6alKNVqw&usqp=CAU"},
        {idProduct:3,name:"Jhon",comment:"Smartwatch show",stars:4,photo:"https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg"},
        {idProduct:3,name:"Mikael",comment:"Realmente faz o que promete",stars:5,photo:"https://alessandrabotoes.com.br/_galerias/avatares/6.png"}
      ]);
    });
};

