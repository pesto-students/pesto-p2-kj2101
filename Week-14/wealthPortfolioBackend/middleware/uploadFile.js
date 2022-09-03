const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const filefilter = (req, file, cb) => {
  cb(null, true);
};

const uploadFile = multer({ storage: storage, fileFilter: filefilter });

module.exports = { uploadFile };
