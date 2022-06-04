const { hotels, amenitiesDetails } = require("../../data-provider");

const Mutation = {
  createHotel: (parent, args, { db }, info) => {
    if (!args.data.name) {
      throw new Error("Name is required.");
    }

    if (!args.data.address) {
      throw new Error("Address is required.");
    }

    if (!args.data.phone) {
      throw new Error("Phone No. is required.");
    }

    if (!args.data.email) {
      throw new Error("Email Address is required.");
    }

    if (!args.data.country) {
      throw new Error("Country is required.");
    }

    if (!args.data.pincode) {
      throw new Error("Pincode is required.");
    }

    if (!args.data.latitude) {
      throw new Error("Latitude is required.");
    }

    if (!args.data.longitude) {
      throw new Error("Longitude is required.");
    }

    if (!args.data.checkIn) {
      throw new Error("Check In is required.");
    }

    if (!args.data.checkOut) {
      throw new Error("Check Out is required.");
    }

    const hotelID = db.hotels.length + 1;
    const amenitiesID = db.amenitiesDetails.length + 1;
    const hotel = {
      id: hotelID,
      name: args.data.name,
      address: args.data.address,
      rating: args.data.rating,
      phone: args.data.phone,
      email: args.data.email,
      country: args.data.country,
      pincode: args.data.pincode,
      latitude: args.data.latitude,
      longitude: args.data.longitude,
      checkIn: args.data.checkIn,
      checkOut: args.data.checkOut,
    };
    const amenities = {
      id: amenitiesID,
      hotelId: hotelID,
      wifi: args.data.wifi || false,
      roomService: args.data.roomService || false,
      laundry: args.data.laundry || false,
      locker: args.data.locker || false,
      swimmingPool: args.data.swimmingPool || false,
      giftShops: args.data.giftShops || false,
    };

    db.hotels.push(hotel);
    db.amenitiesDetails.push(amenities);
    return {
      ...hotel,
      tariffs: [],
      reviews: [],
      amenities: amenities,
    };
  },
};

module.exports = { Mutation };
