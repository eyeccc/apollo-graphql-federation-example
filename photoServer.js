const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  enum Species {
      Dog
      Cat
  }

  type Pet {
      name: String!
      id: ID!
      species: Species
      breed: String!
      owner: User!
      photos: [Photo!]!
  }

  type Photo {
      id: ID!
      pet: Pet!
      url: String!
  }

  type User {
      id: ID!
      favoritePhoto: Photo
      photoGallery: [Photo]
  }

  type Query {
      allPhotos: [Photo!]!
  }
`;

const photos = [
  {
    id: 'photoID1',
    pet: {
      name: 'doggo',
      id: 'doggo1',
      species: 'Dog',
      breed: 'corgi',
      owner: {
        id: 'user1',
        favoritePhoto: {
          id: 'photoID1',
          //pet: Pet!
          url: 'photo_url_1'
      },
        photoGallery: null
      },
      photos: []
    },
    url: 'photo_url_1'
  },
];

const resolvers = {
  Query: {
    allPhotos: () => photos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});