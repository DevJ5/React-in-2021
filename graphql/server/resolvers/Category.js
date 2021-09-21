const Category = {
  animals: (parent, args, { animals }) => {
    let animalsFound = animals.filter(
      (animal) => animal.category === parent.id
    );
    return animalsFound;
  },
};

module.exports = Category;
