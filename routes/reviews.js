import express from "express";
import pool from "../database.js";

const router = express.Router();

router.post("/", (request, response) => {
  const { comments, animal_id, customer_id } = request.body;
  const query =
    'INSERT INTO public."reviews" (comments, animal_id, customer_id) VALUES ($1,$2 ,$3)';
  const data = [comments, animal_id, customer_id];
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
  pool.query('SELECT * FROM public."reviews" ', (error, res) => {
    if (error) {
      throw error;
    }
    response.status(200).json(res.rows);
  });
});

export default router;
