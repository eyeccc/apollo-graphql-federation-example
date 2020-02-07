# apollo-graphql-federation-example
example for demo how to adapt graphql federation
reference: use [this article](https://itnext.io/a-guide-to-graphql-schema-federation-part-1-995b639ac035) for example

## How to Run

- `yarn install`

1. To run a graphql without federation:
- `node photoServer.js`
- `node auctionServer.js`

2. To run federated graphql (run below three code concurrently):
- `node federationSetup/photoServer.js`
- `node federationSetup/auctionServer.js`
- `node federationSetup/gatewayServer.js`

Check your graph on `http://localhost:4100`

3.  To run federated graphql with relay example (run below three code concurrently):
- `node federationSetup/photoServer.js`
- `node auctionRelayServer.js`
- `node federationSetup/gatewayServer.js`

Check your graph on `http://localhost:4100`

## How to test graphql-code-generator
- run your federated graphql servers
- `yarn gen-schema` and it will generate a typescript file with types according to your server schema
