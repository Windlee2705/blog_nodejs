const NewsRouter = require('./news')
const SiteRouter = require('./site')
// const path = require('path')
console.log("test dirname 2 : ", __dirname)
const route = (app) => {

    app.use('/news',NewsRouter)
    
    app.use('/',SiteRouter)
    
  app.post("/", (req, res) => {
    console.log("phonglq ahihiii", req.body);
    res.render("home");
  });
};

module.exports = route;
