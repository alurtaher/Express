const { User, Booking, Bus } = require("../models");

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.findAll({
    where: { userId: req.params.id },
    include: [{ model: Bus, attributes: ["busNumber"] }]
  });
  res.json(bookings);
};