const express = require("express");
const Auth = require("../middleware/auth");
const Assets = require("../models/assets");
const router = new express.Router();

router.post("/assets", Auth, async (req, res) => {
  try {
    const newAssets = new Assets({
      ...req.body,
      user: req.user._id,
    });
    await newAssets.save();
    res.status(201).send(newAssets.toJSON({ virtuals: true }));
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: "error" });
  }
});

router.patch("/assets", Auth, async (req, res) => {
  try {
    Assets.findOneAndUpdate(
      { user: req.user._id },
      req.body,
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        res.send(doc.toJSON({ virtuals: true }));
      }
    );
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: "error" });
  }
});

router.delete("/assets", Auth, async (req, res) => {
  try {
    Assets.findOneAndRemove({ user: req.user._id }, function (err) {
      if (err) return err;
    });
    res.send();
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: "error" });
  }
});

module.exports = router;
