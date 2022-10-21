import express from "express";
import pool from "../database.js";

const router = express.Router();

router.post("/", (request, response) => {
  const { name, age, description, image, customer_id } = request.body;
  const query =
    'INSERT INTO public."animal_detail" (name, age, description, image, customer_id) VALUES ($1,$2 ,$3 , $4, $5)';
  const data = [name, age, description, image, customer_id];
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
  pool.query('SELECT * FROM public."animal_detail" ', (error, res) => {
    if (error) {
      throw error;
    }
    response.status(200).json(res.rows);
  });
});

router.get("/:id", async (request, response) => {
  const params = request.params.id;

  const reviews = await pool.query(
    'SELECT * FROM public."reviews" where animal_id = $1',
    [params]
  );
  console.log(reviews);
  const animalDetail = await pool.query(
    'SELECT * FROM public."animal_detail" where id = $1',
    [params]
  );

  response.status(200).json({
    status: "success",

    data: {
      animalDetail: animalDetail.rows,
      reviews: reviews.rows,
      code: response.statusCode,
    },
  });
});
export default router;
