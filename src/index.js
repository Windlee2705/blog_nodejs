const express = require('express')
const {engine} = require('express-handlebars');

const path = require('path');
console.log("phong",path.join(__dirname, 'sources', 'views'));


const app = express()
const port = 3000
const morgan = require('morgan')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended : true
}))
app.use(express.json());
//HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine(
  {
    extname : ".hbs",
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'sources', 'views'));

app.get('/test', (req, res) => {
  res.render('test');
})

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.post('/', (req, res) => {
  console.log("phonglq ahihiii",req.body )
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
