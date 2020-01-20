const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
      id: ID!
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

  type Photo { 
      id: ID!
  }

  type Query {
      allAuctions: [Auction!]!
  }
`;

const auctions = [
  {
    id: '1',
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

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});