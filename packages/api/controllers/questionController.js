const { Question, Room } = require("../models");
const { GeneralError, NotFound } = require("../utils/errors");

class QuestionController {
  async createQuestion(req, res) {
    const { roomId, message, username } = req.body;

    try {
      const question = new Question({
        room: roomId,
        message,
        username,
      });

      await question.save();

      // add to room
      const room = await Room.findById(question.room);
      room.questions.push(question);
      await room.save();

      res.send(question);
    } catch (e) {
      throw new GeneralError(e);
    }
  }

  async getQuestion(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const question = await Question.findById(id);
      res.send(question);
    } catch (e) {
      throw new NotFound(`No question found with id: ${id}`);
    }
  }
}

module.exports = QuestionController;
