const { ApolloServer, gql } = require("apollo-server");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const {
  hotels,
  tariffDetails,
  reviewDetails,
  amenitiesDetails,
} = require("../data-provider");

const typeDefs = gql`
  # The "Type" type
  type Hotel {
    id: Int!
    name: String!
    address: String!
    rating: Float
    phone: String!
    email: String!
    country: String!
    pincode: String!
    latitude: Float!
    longitude: Float!
    checkIn: String!
    checkOut: String!
    tariffs: [Tariff]
    reviews: [Review]
    amenities: Amenities
  }

  type Tariff {
    id: Int!
    hotelId: Int!
    roomType: String!
    tariff: Float!
  }

  type Review {
    id: Int!
    hotelId: Int!
    reviewer: String!
    comments: String
    rating: Float!
  }

  type Amenities {
    id: Int!
    hotelId: Int!
    wifi: Boolean
    roomService: Boolean
    locker: Boolean
    swimmingPool: Boolean
    giftShops: Boolean
  }

  # The "Input" type
  input CreateHotelInput {
    name: String!
    address: String!
    rating: Float
    phone: String!
    email: String!
    country: String!
    pincode: String!
    latitude: Float!
    longitude: Float!
    checkIn: String!
    checkOut: String!
    wifi: Boolean
    roomService: Boolean
    locker: Boolean
    swimmingPool: Boolean
    giftShops: Boolean
  }

  # The "Query" type
  type Query {
    hotels: [Hotel!]!
    hotel(hotelId: Int!): Hotel!
    reviews(hotelId: Int!): [Review!]!
  }

  # The "Mutation" type
  type Mutation {
    createHotel(data: CreateHotelInput!): Hotel!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    db: {
      hotels,
      tariffDetails,
      reviewDetails,
      amenitiesDetails,
    },
  },
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
