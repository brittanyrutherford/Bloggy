import './../css/master.scss'

document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('submitpost')

    btnSubmit.addEventListener('click', () => {
        let postTitle = document.getElementById('postTitle').value
        let postDate = document.getElementById('postDate').value
        let author = document.getElementById('author').value
        let commentsCount = document.getElementById('commentsCount').value
        let postContent = document.getElementById('postContent').value
        
        fetch('http://localhost:3000/posts', {
            method: 'POST', 
            body: {
                "postTitle": postTitle , 
                "postDate": postDate, 
                "author": author , 
                "commentsCount" :commentsCount, 
                "postContent" : postContent
            }
        }).then((res) => res.json())
            .then((data) => console.log(data))

    })
})