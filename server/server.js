const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const mdb = require('./mongo')
const bodyParser = require('body-parser')
app.use(express.static('build'))
app.use(bodyParser.json())
app.set('view engine', 'hbs')


mdb.connect((db) => {
    app.get('/', (req, res) => {
        db.collection('posts').find().toArray().then((posts, err) =>{
            if(err){
                return res.status(400).send({
                    errMessage: `Something wrong happened, error details: ${err}`
                })
            }

        res.render('index', {
                message: 'Successfully retrieved data', 
                posts
            })
        })
    })

    app.get('/newpost', (req, res) => {
        res.render('newpost')
    })

      app.post('/posts', (req, res) => {
        db.collection('posts').insertOne({
            postTitle: req.body.postTitle, 
            postDate: req.body.postDate, 
            author: req.body.author, 
            authorLink: req.body.authorLink, 
            commentsCount:req.body.commentsCount, 
            postContent: req.body.postContent
        }, (err, result) => {
            if(err) return res.status(400).send({errMessage: `Failed to insert a new post, reason: ${err}`})

            res.send({
                message: 'Added post successfully', 
                post: result.ops
            })
        })
    })

    app.listen(3000, () => {
        console.log('listening on port 3000')
    })
})  