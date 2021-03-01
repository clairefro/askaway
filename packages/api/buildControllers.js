const RoomController = require("./controllers/roomController");
const QuestionController = require("./controllers/questionController");

const buildControllers = () => {
  const roomController = new RoomController();
  const questionController = new QuestionController();
  return {
    roomController,
    questionController,
  };
};

module.exports = {
  buildControllers,
};
