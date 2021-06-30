
const express = require("express");

const app = express();

// app.get es una funcion para dar la ruta de respuesta en express
// get el navegador pide datos
app.get("/", (req, res) => {
    res.send("hello world");
});

// post el navegador envia datos
app.post("/contact", (req, res) => {
    res.send("form contact");
});


// el navegador quiere acutalizar un dato
app.put("/test", (req, res) => {
    res.send("<h1>este es el titulo del test</h1>");
});

// el navegador quiere borrar un dato
app.delete(5000, "127.0.0.1" , () => {
    console.log("server on port 5000");
});

// utilizo nodemon para crear un servidor que no necesite rescargar
