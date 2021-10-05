const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const connection = () => {
  const db = open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });

  return db;
};

const setup = async () => {
  const db = await connection();

  // await db.migrate({ force: true });
  const people = await db.all('SELECT * FROM person');
  // console.log('All people', JSON.stringify(people, null, 4));

  const vehicles = await db.all('SELECT * FROM vehicle');
  // console.log('ALL Vehicles', JSON.stringify(vehicles, null, 2));
};

setup();

module.exports = connection;
