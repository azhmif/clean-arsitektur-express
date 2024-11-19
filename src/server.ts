import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import sequelize from "./config/database";
import { setupSwagger } from "./config/swagger";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
// Swagger setup
setupSwagger(app);

// Middleware
app.use(bodyParser.json());

//

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
