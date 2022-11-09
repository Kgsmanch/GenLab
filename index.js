import app from "./src/config/server.js";
import indexRoutes from "./src/routes/index.routes.js";
import * as conn from "./src/config/database.config.js"; //conexao com banco

// acesso as rotas
app.use("/", indexRoutes);

import mongoose from "mongoose";
import Lab from "./src/models/Laboratorio.js";

app.get("/teste", async function findBy(request, response) {
    const result = await Lab.find({ "tipo": "tipo UNICO" })
    result.map(result => result.nome).sort();
    console.log(result)
    return response.json(result);
})