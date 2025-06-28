const connection = require("../utils/dbconnection.js");

exports.seatsAvailable = (req, res) => {
  const seats = parseInt(req.params.seats);
  const query = "SELECT * FROM buses WHERE available_seats > ?";
  connection.query(query, [seats], (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};

exports.addNewBus = (req, res) => {
  const { bus_name, total_seats, available_seats } = req.body;
  const query = "INSERT INTO buses (bus_name, total_seats, available_seats) VALUES (?, ?, ?)";
  
    connection.execute(query, [bus_name, total_seats, available_seats], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ id: result.insertId, bus_name, total_seats, available_seats });
    });
};
