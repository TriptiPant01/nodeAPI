import express from "express";
import pool from "../database.js";

const router = express.Router();

router.post("/", (request, response) => {
  const { name, phone_number, address } = request.body;
  const query =
    'INSERT INTO public."customer" (name, phone_number, address) VALUES ($1,$2 ,$3 )';
  const data = [name, phone_number, address];
  pool.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    response.status(201).json({
      status: true,
      result: "Successfully Added",
      code: response.statusCode,
    });
  });
});

router.get("/", (req, response) => {
  pool.query('SELECT * FROM public."customer"', (error, res) => {
    if (error) {
      throw error;
    }
    response.status(200).json(res.rows);
  });
});

export default router;
