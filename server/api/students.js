const router = require("express").Router();
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
