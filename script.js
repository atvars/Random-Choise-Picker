// bringing in my elemts
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// as page loads we got cursor in textarea and ready to be typed
textarea.focus();

// event listener which listns to every key release
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

// seperats entered strings when comma is entered and saves in array. Also removes any white spaces
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
    !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''
    
    // displaying on the screen
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// picks a rondom tag by chamiping with highlight class from one to another
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    // makes sure it stops on one of them
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
            
        }, 100)

    }, times * 100)
}

// function to pick a random
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

//  add/remove highlight class
function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}