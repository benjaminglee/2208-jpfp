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
      "https://www.looper.com/img/gallery/everything-you-need-to-know-about-jedi-temples/l-intro-1608080501.jpg",
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
