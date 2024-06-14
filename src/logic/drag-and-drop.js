import './styles/game.style.css'

const element = document.createElement('div')
element.classList.add('five')
element.style.position = 'fixed'

const moveElement = function (x,y) {
    for (let i = 0; i < 100; i++) {
        document.getElementById(i).style.backgroundColor = 'white'
    }
    const topCoordinate = (event.clientY - y)
    const leftCoordinate = (event.clientX - x)
    element.style.top = topCoordinate + 'px'
    element.style.left = leftCoordinate + 'px'
    const targetTile = document.elementsFromPoint(leftCoordinate,topCoordinate)[0]
    if (document.getElementById(targetTile.id + targetTile.id/50)){
        for (let i = 0; i < targetTile.id/50; i++){
            document.getElementById(targetTile.id + i).style.backgroundColor = 'red'
        }
    }
    if (document.elementsFromPoint(leftCoordinate,topCoordinate)[0].id > 0 && document.elementsFromPoint(leftCoordinate,topCoordinate)[0].id < 100) {
        console.log('stuff')
        element.style.left = targetTile.getBoundingClientRect().x-10 + 'px'
        element.style.top = targetTile.getBoundingClientRect().y-10 + 'px'
    }
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