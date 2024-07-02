// importamos el módulo de terceros Express
const express = require ('express');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/mensaje', (req, res) => {
    res.send(`<h1>El servidor funciona correctamente</h1>
             <p>Aquí iría el contenido del mensaje</p>`);
    
}); 

app.use((req, res) =>{
    res.status(404).send(`No he encontrado lo que buscabas...`)
})


app.listen(3000, () => {
    console.log("Servidor corriendo");
})