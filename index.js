
const express = require("express");

const app = express();

// app.get es una funcion para dar la ruta de respuesta en express
// get el navegador pide datos
app.get("/", (req, res) => {
    res.send("peticion get received");
});

// post el navegador envia datos
app.post("/contact", (req, res) => {
    res.send("post request received");
});


// el navegador quiere acutalizar un dato
app.put("/test", (req, res) => {
    res.send("delete request received");
});

// el navegador quiere borrar un dato
app.delete("/test", (req, res) => {
    res.send("delete request received");
});



app.listen(5000, "127.0.0.1" , () => {
    console.log("server on port 5000");
});

// utilizo nodemon para crear un servidor que no necesite rescargar
