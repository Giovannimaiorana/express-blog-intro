//importazione express
const express = require("express");
const dotenv = require("dotenv");
//importo controller home
const homeController = require("./controllers/home");
//importo controller posts
const postController = require("./controllers/posts");
dotenv.config();

//istanza di express
const app = express();

//configurazione per file statici
app.use(express.static("public"));

//definizione rotte home 
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contacts", homeController.contacts);
//definizione rotta posts
app.get("/posts", postController.index);

// Avviamo il server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});