// importamos el módulo de terceros Express
const express = require ('express');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/server3-files/team.html');
    
}); 

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/server3-files/about.html');
    
});

app.use((req, res) =>{
    res.status(404).send(`No he encontrado lo que buscabas...`)
})


app.listen(3000, () => {
    console.log("Servidor corriendo");
})