const { GeneralError } = require("../utils/errors");
const Room = require("../models").Room;

/** Hide host_secret from client */
const publicRoom = (room) => {
  const { _id, title } = room;
  return { _id, title };
};

class RoomController {
  async createRoom(req, res) {
    const { title, host_secret } = req.body;

    let room = null;

    try {
      room = await Room.create({ title, host_secret });
      res.send(publicRoom(room));
    } catch (e) {
      throw new GeneralError(e);
    }
  }
}

module.exports = RoomController;
