# GraphQL Hotels API

This project was generated with [NodeJs](https://nodejs.org/en/) version 14.17.5.

## Requirements

1.  [Apollo Server](https://www.apollographql.com/docs/apollo-server/) version 3.8.2
2.  [express](http://expressjs.com/) version 4.18.1
3.  [GraphQL](https://graphql.org/) version 16.5.0

## Installation

Run `npm i`, to install all the required dependencies.

## NodeJs Rest API

In case, you need to access NodeJs Rest API based on Express, run `npm run rest-api`. The app will not automatically reload if you change any of the source files.

### API Endpoints

1. GET | http://localhost:3000/api/hotels - Return all hotels data
2. GET | http://localhost:3000/api/hotels/{id} - Return hotel data filter by hotelId
3. GET | http://localhost:3000/api/hotels/{lat}/{lng} - Return hotel data filter by lattitude and longitude
4. GET | http://localhost:3000/api/tariff/{hotelId} - Return tariffs filter by hotelId
5. GET | http://localhost:3000/api/reviews/{hotelId} - Return reviews filter by hotelId
6. GET | http://localhost:3000/api/amentities/{hotelId} - Return amentities filter by hotelId

7. POST | http://localhost:3000/api/hotels - create new hotel

```
   body: {
    id: string;
    name: string;
    address: string;
    rating: number;
    phone: string;
    email: string;
    country: string;
    pincode: string;
    latitude: number;
    longitude: number;
    checkIn: string;
    checkOut: string;
    wifi: boolean;
    roomService: boolean;
    laundry: boolean;
    locker: boolean;
    swimmingPool: boolean;
    giftShops: boolean;
  }
```

## Apollo Server - GraphQL

In case, you need to access GraphQL based on Apollo Server, run `npm run apollo-server`. The app will not automatically reload if you change any of the source files. Use `http://localhost:4000/` to access GraphQL Playground.

### Query

1. Get all hotels including tariffs, reviews and amenities,

```
query {
  hotels {
    id
    name
    address
    rating
    phone
    email
    country
    pincode
    latitude
    longitude
    checkIn
    checkOut
    reviews {
      id
      hotelId
      reviewer
      comments
      rating
    }
    tariffs {
      id
      hotelId
      roomType
      tariff
    }
    amenities {
      id
      hotelId
      wifi
      roomService
      locker
      swimmingPool
      giftShops
    }
  }
}
```

2. Get hotel details including tariffs, reviews and amenities by providing hotelId,

```
query {
  hotel(hotelId: $hotelId) {
    id
    name
    address
    rating
    phone
    email
    country
    pincode
    latitude
    longitude
    checkIn
    checkOut
    reviews {
      id
      hotelId
      reviewer
      comments
      rating
    }
    tariffs {
      id
      hotelId
      roomType
      tariff
    }
    amenities {
      id
      hotelId
      wifi
      roomService
      locker
      swimmingPool
      giftShops
    }
  }
}
```

3. Get hotel reviews by providing hotelId,

```
query {
  reviews(hotelId: $hotelId) {
    id
    hotelId
    reviewer
    comments
    rating
  }
}
```

### Mutation

1. Create a hotel,

```
mutation($data: CreateHotelInput!) {
  createHotel(data: {
    "name": "Test Hotel",
    "address": "Test Address",
    "rating": 0.0,
    "phone": "123 4567 8589",
    "email": "help@domain.com",
    "country": "India",
    "pincode": "123456",
    "latitude": 12.2546,
    "longitude": 22.5412,
    "checkIn": "11 AM",
    "checkOut": "10 AM",
    "wifi": true,
    "roomService": true,
    "locker": true,
    "swimmingPool": true,
    "giftShops": false
  }) {
    id
    name
    address
    rating
    phone
    email
    country
    pincode
    latitude
    longitude
    checkIn
    checkOut
    amenities {
      id
      hotelId
      wifi
      roomService
      locker
      swimmingPool
      giftShops
    }
  }
}
```
