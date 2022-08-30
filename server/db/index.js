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
    campusId: 1,
  });
  await Student.create({
    firstName: "Anakin",
    lastName: "Skywalker",
    email: "sandhater23@gmail.com",
    gpa: 2.2,
    campusId: 2,
  });
  await Student.create({
    firstName: "C",
    lastName: "Threepeeoh",
    email: "cyborg@gmail.com",
    gpa: 4.0,
    campusId: 1,
  });
  await Student.create({
    firstName: "Luke",
    lastName: "Skywalker",
    email: "singlehandedly@gmail.com",
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
