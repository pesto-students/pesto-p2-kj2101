const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const assetsSchema = new mongoose.Schema({
  user: {
    type: ObjectID,
    required: true,
    ref: "User",
  },
  fixed_income: {
    type: Number,
    required: true,
    default: 0,
  },
  alternatives: {
    type: Number,
    required: true,
    default: 0,
  },
  equity: {
    type: Number,
    required: true,
    default: 0,
  },
});

assetsSchema.virtual("total_assets").get(function () {
    return this.fixed_income + this.alternatives + this.equity;
});

const Assets = mongoose.model("Assets", assetsSchema);

module.exports = Assets;
