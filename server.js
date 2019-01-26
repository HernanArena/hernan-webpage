const express = require('express')
const app = express()
//Helpers
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname+ '/public'));


//partials
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
   res.render('home',{
     nombre:'hernán arena',
     anio: new Date().getFullYear()
   });
})

app.get('/about',  (req, res) => {
   res.render('about',{
     anio: new Date().getFullYear()
   });
})
app.listen(port,()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
})
// app.get('/',  (req, res) => {
//   // res.send('Hola mundo')
//   let salida = {
//     nombre: 'Hernán',
//     edad: 38,
//     url: req.url
//   };
//   res.send(salida)
// })
