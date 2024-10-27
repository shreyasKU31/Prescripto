import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb - call back
  },
});

const upload = multer({ storage });

export default upload;
