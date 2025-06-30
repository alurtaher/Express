const { Bus, Booking, User } = require("../models");

exports.createBus = async (req, res) => {
  const bus = await Bus.create(req.body);
  res.json(bus);
};

exports.getBusBookings = async (req, res) => {
  const bookings = await Booking.findAll({
    where: { busId: req.params.id },
    include: [{ model: User, attributes: ["name", "email"] }]
  });
  res.json(bookings);
};