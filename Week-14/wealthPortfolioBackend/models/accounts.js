const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const accountsSchema = new mongoose.Schema({
  user: {
    type: ObjectID,
    required: true,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

accountsSchema.pre("save", async function (next) {
  const accounts = this;
  accounts.date = new Date(accounts.date);
  next();
});

const Accounts = mongoose.model("Accounts", accountsSchema);

module.exports = Accounts;
