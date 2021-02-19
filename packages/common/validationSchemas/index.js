// keep all schemas in this file as to not confuse snowpack...
const yup = require("yup");

const createRoomSchema = yup.object({
  title: yup.string().required("Required"),
  host_secret: yup.string().required("Required"),
});

module.exports = {
  createRoomSchema,
};
