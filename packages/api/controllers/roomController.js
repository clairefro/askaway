class RoomController {
  async createRoom(req, res) {
    const { title, host_secret } = req.body;
    console.log({ title, host_secret });
    res.send("ok");
  }
}

module.exports = RoomController;
