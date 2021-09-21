const Query = {
  mainCards: (parent, args, ctx) => ctx.mainCards,
  animals: (parent, args, ctx) => ctx.animals,
  animal: (parent, args, ctx) => {
    let animal = ctx.animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  categories: (parent, args, ctx) => ctx.categories,
  category: (parent, args, ctx) => {
    let categoryFound = ctx.categories.find(
      (category) => category.slug === args.slug
    );
    return categoryFound;
  },
};

module.exports = Query;
