const Router = require("express").Router;
const { validateSchema } = require("./middleware/validateSchema");
const { createRoomSchema } = require("../common/validationSchemas");
const { buildControllers } = require("./buildControllers");

const router = Router();
const { roomController } = buildControllers();

router.get("/", (req, res) => {
  res.send("You're in");
});

router.post(
  "/rooms",
  validateSchema(createRoomSchema),
  roomController.createRoom
);

module.exports = {
  router,
};
