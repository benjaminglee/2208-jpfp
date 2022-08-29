const router = require("express").Router();
router.use("/campus", require("./campuses"));
router.use("/student", require("./students"));

module.exports = router;
