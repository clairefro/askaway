const RoomController = require("./controllers/roomController");

const buildControllers = () => {
  const roomController = new RoomController();
  return {
    roomController,
  };
};

module.exports = {
  buildControllers,
};
