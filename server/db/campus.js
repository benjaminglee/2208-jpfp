const db = require("./database");
const Sequelize = require("sequelize");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://thumbs.dreamstime.com/b/education-icon-school-perfect-application-web-logo-presentation-template-design-line-style-171841338.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Campus;
