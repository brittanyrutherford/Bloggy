import './../css/master.scss'

document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('submitpost') as HTMLInputElement

    btnSubmit.addEventListener('click', () => {
        let postTitleInput = document.getElementById('postTitle') as HTMLInputElement | null
        let postTitle = postTitleInput?  postTitleInput.value : 'Default Title'

        let postDateInput = document.getElementById('postDate') as HTMLInputElement | null
        let postDate =  postDateInput? postDateInput.value : 'Default Title'


        
        let authorInput = document.getElementById('author') as HTMLInputElement | null
        let author = authorInput?  authorInput.value : 'Default Title'
        
           
        let commentsCountInput = document.getElementById('commentsCount') as HTMLInputElement | null
        let commentsCount =  commentsCountInput? commentsCountInput.value : 'Default Title'
      
        let postContentInput = document.getElementById('postContent') as HTMLInputElement | null
        let postContent = postContentInput ? postContentInput.value : 'Default Title'

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: {
                "postTitle": postTitle,
                "postDate": postDate,
                "author": author,
                "commentsCount": commentsCount,
                "postContent": postContent
            }
        }).then((res) => res.json())
            .then((data) => console.log(data))

    })
})