import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allow to accept json data in body

app.use("/api/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port} Hello`);
});
