const db = require("./database");
const Sequelize = require("sequelize");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.wired.com/photos/5dd593a829b9c40008b179b3/master/pass/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg",
  },
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
