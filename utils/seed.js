const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thought = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const email= first + '.' + last + '@example.com';

    users.push({
      first,
      last,
      email,
    });

    thoughts.push(thought);
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
