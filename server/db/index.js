// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");

Campus.hasMany(Student);
Student.belongsTo(Campus);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  await Campus.create({
    name: "Jedi Temple",
    imageUrl:
      "https://www.looper.com/img/gallery/everything-you-need-to-know-about-jedi-temples/intro-1608080501.jpg",
    address: "Coruscant",
    description:
      "Instantly recognizable by its distinctive crown of five spires, the Jedi Temple was the home of the Jedi Order on Coruscant. Part school and part monastery, the Jedi Temple was the central hub for all Jedi activities in the galaxy.",
  });
  await Campus.create({
    name: "Royal Imperial Academy",
    imageUrl:
      "https://starwarsblog.starwars.com/wp-content/uploads/2016/02/imperialseal.jpg",
    address: "Galactic City, Coruscant",
    description:
      "The Royal Imperial Academy, also known as the Coruscant Imperial University, was the main campus of the Galactic Empire's military training program on the planet Coruscant. In the years leading up to the Galactic Civil War, the Academy's head was Commandant Deenlark. Alexsandr Kallus and Jovan graduated from that Imperial Academy at the same time. Thane Kyrell and Ciena Ree both graduated prior to the Battle of Yavin.",
  });
  await Student.create({
    firstName: "Baby",
    lastName: "Yoda",
    email: "lilgreengoblin@gmail.com",
    gpa: 3.5,
    imageUrl:
      "https://www.cnet.com/a/img/resize/e49d3beb249a566546a69aefd7da4f69f7c1075c/2019/12/16/1ac578a4-386d-4bc8-b5a9-3d4bfc1c78b6/twitter-in-stream-wide-baby-y.jpg?auto=webp&fit=crop&height=630&width=1200",
    campusId: 1,
  });
  await Student.create({
    firstName: "Anakin",
    lastName: "Skywalker",
    email: "sandhater23@gmail.com",
    gpa: 2.2,
    imageUrl:
      "https://assets.mycast.io/characters/anakin-skywalker-354323-normal.jpg?1578804558",
    campusId: 2,
  });
  await Student.create({
    firstName: "C",
    lastName: "Threepeeoh",
    email: "H&Crelations@gmail.com",
    gpa: 4.0,
    imageUrl:
      "https://www.thewrap.com/wp-content/uploads/2019/10/C-3PO-Star-Wars-The-Rise-of-Skywalker-Final-Trailer-618x400.jpg",
    campusId: 1,
  });
  await Student.create({
    firstName: "Luke",
    lastName: "Skywalker",
    email: "singlehandedly@gmail.com",
    imageUrl:
      "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/luke-skywalker-costume-last-jedi.jpg",
    gpa: 3.8,
    campusId: 2,
  });

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  Student,
  Campus,
};
