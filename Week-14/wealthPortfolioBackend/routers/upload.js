const express = require("express");
const Auth = require("../middleware/auth");
const Upload = require("../models/upload");
const { uploadFile } = require("../middleware/uploadFile");
const router = new express.Router();

router.post("/upload", uploadFile.single("file"), Auth, async (req, res) => {
  console.log(req.file.path);
  const newUpload = new Upload({
    user: req.user._id,
    file: req.file.path,
  });

  try {
    await newUpload.save();
    res.status(201).send(newUpload);
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: "error" });
  }
});

module.exports = router;
