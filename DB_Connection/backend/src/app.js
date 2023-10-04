const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!')
  })

app.post('/', (req, res) => {
  res.send('Got a POST request')
})


app.put('/', (req, res) => {
  res.send('Got a PUT request')
})

app.listen(3000, () => {
console.log('Servidor encendido');
});

// probar sobre http://localhost:3000/