const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

// crear la conexión a la base de datos
const db = require("./config/db");

//importar el model
require('./models/Proyectos');

db.sync()
    .then(() => console.log("conectando..."))
    .catch(error => console.log(error))

//crear una aplicación de express

const app = express();

//donde cargar los archivos estáticos
app.use(express.static("public"));

//habilitar pug
app.set("view engine", "pug");

//añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));
// habilitar body parser para leer datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(3000);
