const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  extend type User @key(fields: "id") {
      id: ID! @external
      username: String!
      auctionHistory: [Auction]
  }

  type Auction {
      id: ID!
      name: String!
      photo: Photo!
      offers: [Bid]
      highestOffer: Bid
  }

  type Bid {
      user: User!
      amount: Int!
  }

  extend type Photo @key(fields: "id") {
    id: ID! @external
  }

  type Query {
      allAuctions: [Auction!]!
  }
`;

const auctions = [
  {
    id: 'auction1',
      name: 'Auction 1',
      photo: {
        id: 'photoID1',
      },
      offers: [{
        user: {
          id: 'user1',
          username: 'tom_cruise',
          auctionHistory: null,
      },
        amount: 1
    },],
      highestOffer: {
        user: {
          id: 'user1',
          username: 'tom_cruise',
          auctionHistory: null,
      },
        amount: 1
    },
  },
];

const resolvers = {
  Query: {
    allAuctions: () => auctions,
  },
  
};

//const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});
// The `listen` method launches a web server.
server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});