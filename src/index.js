const express = require('express')
const {engine} = require('express-handlebars');

const path = require('path');
console.log("test dirname 1 : ", __dirname)
console.log("phong",path.join(__dirname, 'sources', 'views'));


const app = express()
const port = 3000
const morgan = require('morgan');
const route = require('./routes');
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

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
