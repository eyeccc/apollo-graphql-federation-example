const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

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

  type Photo @key(fields: "id")  {
      id: ID!
      pet: Pet!
      url: String!
  }

  type User @key(fields: "id")  {
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
          pet: {
            name: 'cat',
            id: 'cat1',
            species: 'Cat',
            breed: 'persian',
            owner: {
              id: 'user2',
              favoritePhoto: null,
              photoGallery: null,
          },
            photos: []
        },
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
  User: {
    __resolveReference(user, {findUserById}) {
      return findUserById(user.id); // should implement correct logic of this function
    }
  },
  Photo: {
    __resolveReference(object) {
      return photos.find(p => p.id === object.id);
    }
  },
  
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});
// The `listen` method launches a web server.
server.listen({port: 4000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});