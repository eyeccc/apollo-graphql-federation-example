const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require("@apollo/gateway");

// Initialize an ApolloGateway instance and pass it an array of implementing
// service names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    { name: 'auctions-relay', url: 'http://localhost:3000' },
    { name: 'auctions', url: 'http://localhost:4001' },
    { name: 'photos', url: 'http://localhost:4000' },
    // more services
  ],
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
});

server.listen({port: 4100}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});