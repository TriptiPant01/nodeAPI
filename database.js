// import { Pool, Client } from "pg";

// const connectionString = "animalDb://triptipant:12345@localhost:5432/animalDb";

// const client = new Client({
//   connectionString: connectionString,
// });

// client.connect();
// export default client;
// // client.query('SELECT * FROM public."Customer"', (err, res) => {
// //   console.log(err, res);
// //   client.end();
// // });

import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "triptipant",
  host: "localhost",
  database: "animalcenter",
  password: "12345",
  port: 5432,
});

export default pool;
