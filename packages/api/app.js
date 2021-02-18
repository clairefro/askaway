require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { createRoom } = require("./controllers");
const { validateSchema } = require("./middleware/validateSchema");
const { createRoomSchema } = require("../common/validationSchemas");

const port = process.env.PORT || 4444

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You're in");
});

router.post("/rooms", validateSchema(createRoomSchema), createRoom);

app.use("/api/v1", router);

// connect to db and start server
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB Connected...");
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`);
		});
	})
	.catch((e) => console.log(e));
