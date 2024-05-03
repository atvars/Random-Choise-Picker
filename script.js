// bringing in my elemts
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// as page loads we got cursor in textarea and ready to be typed
textarea.focus();

// event listener which listns to every key release
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
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