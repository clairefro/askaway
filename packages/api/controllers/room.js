function createRoom(req, res) {
  const { title, host_secret } = req.body;
  console.log({ title, host_secret });
}

module.exports = {
  createRoom,
};
