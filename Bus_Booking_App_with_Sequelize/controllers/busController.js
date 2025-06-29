const Bus = require('../models/bus');

exports.createBus = async (req, res) => {
  const { name, totalSeats, availableSeats } = req.body;
  const bus = await Bus.create({ name, totalSeats, availableSeats });
  res.json(bus);
};

exports.getAvailableBuses = async (req, res) => {
  const minSeats = parseInt(req.params.seats);
  const buses = await Bus.findAll({
    where: {
      availableSeats: { [require('sequelize').Op.gt]: minSeats },
    },
  });
  res.json(buses);
};