const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require("./routers/user.js");
const accountsRouter = require("./routers/accounts");
const assetsRouter = require("./routers/assets");
const uploadRouter = require("./routers/upload");
require("dotenv").config();
require("./db/mongoose");

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(userRouter);
app.use(accountsRouter);
app.use(assetsRouter);
app.use(uploadRouter);
app.listen(port, () => {
  console.log("server listening on port " + port);
});
