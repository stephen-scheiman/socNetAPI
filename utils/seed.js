const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let userCheck = await connection.db
    .listCollections()
    .toArray();
    console.log(userCheck.length);
  if (userCheck.length) {
    await connection.dropCollection("users");
    await connection.dropCollection("thoughts");
  }

  const users = [];
  const thoughtText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const thoughts = [];



  for (let i = 0; i < 5; i++) {
    const fullName = getRandomName();
    const firstInitial = fullName.split(" ")[0].slice(0, 1);
    const first = fullName.split(" ")[0];
    const last = fullName.split(" ")[1];
    const username = firstInitial.toLowerCase() + last.toLowerCase();
    const email = first + "." + last + "@example.com";

    users.push({
      username,
      email,
    });

    thoughts.push({ thoughtText, username });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
