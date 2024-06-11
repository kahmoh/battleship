import './styles/game.style.css'

const element = document.createElement('div')
element.classList.add('five')
element.style.position = 'fixed'

const moveElement = function (x,y) {
    const topCoordinate = (event.clientY - y)
    const leftCoordinate = (event.clientX - x)
    element.style.top = topCoordinate + 'px'
    element.style.left = leftCoordinate + 'px'
}

element.addEventListener('mousedown', (event) => {
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove)
    })
    const x = event.clientX - element.offsetLeft, y = event.clientY - element.offsetTop
    const onMouseMove = (event) => moveElement(x,y)
    document.addEventListener('mousemove',onMouseMove)
})

document.body.appendChild(element)