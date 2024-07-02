// importamos el módulo de terceros Express
const express = require ('express');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/', (req, res) => {
    res.send(`<h1>El servidor funciona correctamente</h1>
             <p>Aquí iría el contenido del mensaje</p>`);
    
}); 




app.listen(3000, () => {
    console.log("Servidor corriendo");
})