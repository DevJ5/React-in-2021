const { v4 } = require('uuid');
const { animals } = require('./Query');

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, slug, description, onSale, category },
    ctx
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      slug,
      description,
      onSale,
      category,
    };

    ctx.animals.push(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => animal.id === id);
    animals.splice(index, 1);
    return true;
  },
};

// mutation x {
//   addAnimal(image: "a" title: "b", rating: 4, price: "5", slug: "d", description: "e", onSale: true, category: "f" ) {
//     description
//   }
// }

module.exports = Mutation;
