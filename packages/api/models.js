const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    title: { type: String, required: true },
    host_secret: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

const questionSchema = new Schema(
  {
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    message: { type: String, required: true },
    username: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = {
  Room,
  Question,
};
