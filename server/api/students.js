const router = require("express").Router();
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
