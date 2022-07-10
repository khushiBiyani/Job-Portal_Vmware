const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const Upload_Controller = require("../Controllers/uploadController");

router.post("/resume", upload.single("file"), Upload_Controller.postResume);
router.post("/profile", upload.single("file"), Upload_Controller.postProfile);

module.exports = router;