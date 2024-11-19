import sequelize from "./config/database";
import "./entities/User";
import "./entities/Category";

(async () => {
  try {
    await sequelize.sync({ alter: true }); // Automatically apply changes to the DB
    console.log("Database synced");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();
