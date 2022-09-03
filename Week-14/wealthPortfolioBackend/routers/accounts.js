const express = require("express");
const Auth = require("../middleware/auth");
const Accounts = require("../models/accounts");
const router = new express.Router();

router.post("/accounts", Auth, async (req, res) => {
  try {
    const newAccounts = new Accounts({
      ...req.body,
      user: req.user._id,
    });
    await newAccounts.save();
    res.status(201).send(newAccounts);
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: "error" });
  }
});

router.get("/accounts/:month", Auth, async (req, res) => {
  const user = req.user._id;
  try {
    const accounts = await Accounts.find({
      $and: [
        { user: user },
        {
          $expr: { $eq: [{ $month: "$date" }, req.params.month] },
        },
      ],
    });
    res.status(200).send(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
