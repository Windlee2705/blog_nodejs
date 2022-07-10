class SiteController {
    index(reg,res){
        res.render('home')
    }
}

module.exports = new SiteController()