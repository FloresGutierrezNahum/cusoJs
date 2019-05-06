const express = require('express');
const app = express();


app.use(express.static(__dirname + "/public"));

//Express HBS engine
app.set('View engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});


/*
//Pueden existir conflictos
app.get('/', function(req, res) {
    //res.send('Hello World');

    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    };

    res.send(salida);
})

app.get('/data', (req, res) => {
    res.send('Hola data');
})
*/

app.listen(3000, () => {
    console.log('Escuchando peticiones en el pueto 3000')
});