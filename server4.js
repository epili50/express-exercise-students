// importamos el módulo de terceros Express
const express = require ('express');
const palindromo = require('./utils/palindrome/index')

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/check/:id', (req, res) => {
    const { id } = req.params;
    const check = palindromo.palindrome(id);
    const message = check ? 'Es un palíndromo' : 'NO es un palíndromo';
    res.send(message)
}); 

app.use((req, res) =>{
    res.status(404).send(`No he encontrado lo que buscabas...`)
})


app.listen(3000, () => {
    console.log("Servidor corriendo");
})