//importazione express
const express = require("express");
const dotenv = require("dotenv");
//importo controller
const homeController = require("./controllers/home");
dotenv.config();

//istanza di express
const app = express();

//definizione rotte
app.get("/", homeController.index);

// Avviamo il server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});