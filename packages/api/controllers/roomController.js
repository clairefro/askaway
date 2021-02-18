const { GeneralError, NotFound } = require("../utils/errors");
const Room = require("../models").Room;

/** Hide host_secret from client */
const publicRoom = (room) => {
  const { _id, title } = room;
  return { _id, title };
};

class RoomController {
  async createRoom(req, res) {
    const { title, host_secret } = req.body;

    try {
      const room = await Room.create({ title, host_secret });
      res.send(publicRoom(room));
    } catch (e) {
      throw new GeneralError(e);
    }
  }

  async getRoom(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const room = await Room.findById(id);
      res.send(publicRoom(room));
    } catch (e) {
      throw new NotFound(`No room found with id: ${id}`);
    }
    res.send("ok");
  }
}

module.exports = RoomController;
