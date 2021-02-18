const yup = require("yup");

const createRoomSchema = yup.object({
  title: yup.string().required(),
  host_secret: yup.string().required(),
});

module.exports = {
  createRoomSchema,
};
