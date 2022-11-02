import app from "./src/config/server.js";
import indexRoutes from "./src/routes/index.routes.js";
import * as conn from "./src/config/database.config.js"; //conexao com banco

// acesso as rotas
app.use("/", indexRoutes);