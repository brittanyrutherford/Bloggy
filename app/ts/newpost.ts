import './../css/master.scss'

document.addEventListener('DOMContentLoaded', () => {
    let btnSubmit = document.getElementById('submitpost') as HTMLInputElement

    function getInputValueOrDefault(inputId : string, defaultValue : string) : string {
         let input = document.getElementById(inputId) as HTMLInputElement | null
        return  input ?  input.value : defaultValue
    }

    btnSubmit.addEventListener('click', () => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify({
                "postTitle":  getInputValueOrDefault('postTitle', 'Default Title'),
                "postDate": getInputValueOrDefault('postDate', 'Default date'),
                "author": getInputValueOrDefault('author', 'Default author'),
                "commentsCount": getInputValueOrDefault('commentsCount', 'Default commentsCount'),
                "postContent": getInputValueOrDefault('postContent', 'Default postContent')
            })
        }).then((res) => res.json())
            .then((data) => console.log(data))
    })
})