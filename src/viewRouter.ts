import express from 'express'
import Article from './mongoose/article-model';
const viewRouters = express.Router()

viewRouters.get('/', async function(req, res) {
    const articles = await Article.find({published: true})
    
    res.render('main/index.ejs', {articles})
});

viewRouters.get('/ecotrop', function (req, res) {
    res.render('ecotrop/index.ejs')
})


export default viewRouters