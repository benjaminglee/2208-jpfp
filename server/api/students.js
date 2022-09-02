const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (error) {
    next(error);
  }
});

router.get("/:studentId", async (req, res, next) => {
  try {
    const studentId = parseInt(req.params.studentId);
    res.send(await Student.findByPk(studentId, { include: { model: Campus } }));
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (error) {
    next(error);
  }
});
router.delete("/:studentId", async (req, res, next) => {
  try {
    const studentId = parseInt(req.params.studentId);
    const student = await Student.findByPk(studentId);
    await student.destroy();
    res.send(student);
  } catch (error) {
    next(error);
  }
});
router.put("/:studentId", async (req, res, next) => {
  try {
    const studentId = parseInt(req.params.studentId);
    const student = await Student.findByPk(studentId);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
