const express = require("express");
const router = express.Router();
const {
  hotels,
  tariffDetails,
  reviewDetails,
  amenitiesDetails,
} = require("../data-provider");

router.get("/", function (req, res, next) {
  res.send("This is a REST API");
});

router.get("/hotels", function (req, res, next) {
  res.json({ hotels });
});

router.get("/hotels/:id", function (req, res, next) {
  const hotel = hotels.find((x) => x.id == req.params.id);
  res.json({ hotel });
});

router.get("/hotels/:lat/:lng", function (req, res, next) {
  console.log("/hotels/:lat/:lng");
  const filteredHotels = hotels.filter(
    (x) => x.latitude == req.params.lat && x.longitude == req.params.lng
  );
  console.log(filteredHotels);
  res.json({ hotels: filteredHotels });
});

router.get("/tariff/:hotelId", function (req, res) {
  const tariff = tariffDetails.filter((x) => x.hotelId == req.params.hotelId);
  res.json({ tariff });
});

router.get("/reviews/:hotelId", function (req, res) {
  const reviews = reviewDetails.filter((x) => x.hotelId == req.params.hotelId);
  res.json({ reviews });
});

router.get("/amenities/:hotelId", function (req, res) {
  const amenities = amenitiesDetails.find(
    (x) => x.hotelId == req.params.hotelId
  );
  res.json({ amenities });
});

router.post("/hotels", function (req, res) {
  const hotelId = hotels.length + 1;
  const amentityId = amenitiesDetails.length + 1;
  const body = req.body.hotel;
  const hotel = {
    id: hotelId,
    name: body.name,
    address: body.address,
    rating: body.rating,
    phone: body.phone,
    email: body.email,
    country: body.country,
    pincode: body.pincode,
    latitude: body.latitude,
    longitude: body.longitude,
    checkIn: body.checkIn,
    checkOut: body.checkOut,
  };
  const amenities = {
    id: amentityId,
    hotelId: hotelId,
    wifi: body.wifi || false,
    roomService: body.roomService || false,
    laundry: body.laundry || false,
    locker: body.locker || false,
    swimmingPool: body.swimmingPool || false,
    giftShops: body.giftShops || false,
  };
  hotels.push(hotel);
  amenitiesDetails.push(amenities);
  res.json({ hotel });
});

module.exports = router;
