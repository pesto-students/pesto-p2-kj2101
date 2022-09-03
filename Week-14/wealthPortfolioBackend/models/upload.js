const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const uploadSchema = new mongoose.Schema({
  user: {
    type: ObjectID,
    required: true,
    ref: "User",
  },
  file: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
