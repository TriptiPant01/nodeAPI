import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import userRoutes from "./routes/users.js";
import customerRoutes from "./routes/customer.js";
import animalDetailRoutes from "./routes/animalDetail.js";
import reviewRoutes from "./routes/reviews.js";

const app = express();
const PORT = process.env.PORT || 2000;

app.use(bodyParser.json());

app.use("/customers", customerRoutes);
app.use("/animalDetail", animalDetailRoutes);
app.use("/review", reviewRoutes);

app.get("/", (req, res) =>
  res.json({
    test: "this is test",
  })
);

app.listen(PORT, () =>
  console.log(`server is Running on port: http://localhost:${PORT}`)
);
