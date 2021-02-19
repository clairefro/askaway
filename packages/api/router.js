const Router = require("express").Router;
const { validateSchema } = require("./middleware/validateSchema");
const { createRoomSchema } = require("../common/validationSchemas");
const { buildControllers } = require("./buildControllers");
const asyncHandler = require("./utils/asyncHandler");

const router = Router();
const { roomController } = buildControllers();

router.get("/", (req, res) => {
  res.send("You're in");
});

router.post(
  "/rooms",
  validateSchema(createRoomSchema),
  asyncHandler(roomController.createRoom)
);

router.get("/rooms/:id", asyncHandler(roomController.getRoom));

module.exports = {
  router,
};
