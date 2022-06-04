const Query = {
  hotels: (parent, args, { db }, info) => {
    const response = db.hotels.map((hotel) => {
      const tariffsArray = db.tariffDetails.filter(
        (tariff) => hotel.id === tariff.hotelId
      );
      const reviewsArray = db.reviewDetails.filter(
        (review) => hotel.id === review.hotelId
      );
      const amenities = db.amenitiesDetails.filter(
        (amenities) => hotel.id === amenities.hotelId
      )[0];

      return {
        ...hotel,
        tariffs: tariffsArray,
        reviews: reviewsArray,
        amenities: amenities,
      };
    });

    return response;
  },
  hotel: (parent, args, { db }, info) => {
    if (!args.hotelId) {
      throw new Error("Hotel ID is required.");
    }

    const hotel = db.hotels.filter(
      (hotel) => hotel.id === parseInt(args.hotelId)
    )[0];

    if (!hotel) {
      throw new Error("Hotel not found.");
    }

    const tariffsArray = db.tariffDetails.filter(
      (tariff) => hotel.id === tariff.hotelId
    );
    const reviewsArray = db.reviewDetails.filter(
      (review) => hotel.id === review.hotelId
    );
    const amenitiesArray = db.amenitiesDetails.filter(
      (amenities) => hotel.id === amenities.hotelId
    )[0];

    return {
      ...hotel,
      tariffs: tariffsArray,
      reviews: reviewsArray,
      amenities: amenitiesArray,
    };
  },
  reviews: (parent, args, { db }, info) => {
    if (!args.hotelId) {
      throw new Error("Hotel ID is required.");
    }

    const hotel = db.hotels.filter(
      (hotel) => hotel.id === parseInt(args.hotelId)
    )[0];

    if (!hotel) {
      throw new Error("Hotel not found.");
    }

    return db.reviewDetails.filter((review) => hotel.id === review.hotelId);
  },
};

module.exports = { Query };
