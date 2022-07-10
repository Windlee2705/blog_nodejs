class NewsController {
    constructor(test1, test2){
        this.test1 = test1;
        this.test2 = test2;
    }

    index(reg, res){
        res.render('news')
    }

    slug(reg, res){
        res.render('test')
    }

}

module.exports = new NewsController(1,2) ;