const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const { mainCards, animals, categories } = require('./db');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');
const Mutation = require('./resolvers/Mutation');

const resolvers = { Query, Category, Animal, Mutation };
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { mainCards, animals, categories },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
