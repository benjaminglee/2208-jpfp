const router = require("express").Router();
const { Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Campus.findAll());
  } catch (error) {
    next(error);
  }
});
router.get("/:campusId", async (req, res, next) => {
  try {
    const campusId = parseInt(req.params.campusId);
    const campus = await Campus.findByPk(campusId);
    console.log(campus, typeof campus);
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body, "INSIDE API ROUTE");
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
