const { Booking } = require("../models");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};