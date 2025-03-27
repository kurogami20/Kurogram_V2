import { sequelize } from "../src/models/index.js";
async function sync() {
  await sequelize.sync({ force: true, cascade: true });
  await sequelize.close();
}

sync();
