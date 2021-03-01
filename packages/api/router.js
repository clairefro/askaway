const Router = require("express").Router;
const {
  validateBodySchema,
  validateParamsSchema,
} = require("./middleware/validateSchema");
const {
  createRoomSchema,
  createQuestionSchema,
} = require("../common/validationSchemas");
const { buildControllers } = require("./buildControllers");
const asyncHandler = require("./utils/asyncHandler");

const router = Router();
const { roomController, questionController } = buildControllers();

router.get("/", (_req, res) => {
  res.send("You're in");
});

// Rooms -----------------------------
router.post(
  "/rooms",
  validateBodySchema(createRoomSchema),
  asyncHandler(roomController.createRoom)
);

router.get("/rooms/:id", asyncHandler(roomController.getRoom));

// Questions -------------------------
router.post(
  "/questions",
  validateBodySchema(createQuestionSchema),
  asyncHandler(questionController.createQuestion)
);


module.exports = {
  router,
};
