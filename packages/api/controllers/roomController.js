const { BadRequest } = require("../utils/errors");
class RoomController {
  createRoom(req, res) {
    const { title, host_secret } = req.body;
    console.log({ title, host_secret });
    throw new BadRequest('test');
    res.send("ok");
  }
}

module.exports = RoomController;
