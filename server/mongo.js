const {MongoClient} = require('mongodb');
exports.connect = function(callback){
MongoClient.connect('mongodb://localhost:27017/blog', (err, db) => {
    if(err)
        return console.log(`Couldn't connect to the database, log details: ${err}`)

 callback(db);
})

}

//  db.collection('posts').find().toArray().then((posts, err) =>{
//         if(err) return console.log(`Couldn't retrieve posts, error details: ${err}`)

//         console.log(JSON.stringify(posts, undefined, 2))
//     })



    // db.collection('posts').insertOne({
    //     postId: 1, 
    //     postTitle: 'Sample article 1, hello world 2', 
    //     postDate: 'May 1st, 2017', 
    //     author: 'Brittany', 
    //     authorLink: '#',
    //     commentsCount: 10, 
    //     postContent: 'Contrary to popular belief, Lorem Ipsum '
    // }, (err, result) => {
    //     if(err) return console.log(`Couldn't add post, error details: ${err}`)

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
