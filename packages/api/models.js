const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  host_secret: { type: String, required: true },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = {
  Room,
};
