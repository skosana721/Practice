// innerHTML
// textContent
const para = document.getElementById('para')
//innerHTML

const ul = document.createElement('ul')
ul.innerHTML = `<li>This is something</li>
<li>This is another thing</li>`
document.body.appendChild(ul)

// textContent

para.textContent = 'Used textContent'