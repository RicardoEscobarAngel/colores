const colores =[
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
    'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
    'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
    'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
    'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
    'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
    'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)'
]
const background = document.querySelector('#background')
const triangle = document.querySelector('#triangle')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')
const rectangle = document.querySelector ('#rectangle')

const randomColor = () => {
    const number = Math.floor(Math.random() * colores.length - 1)
    return colores[number]
}

const randomWidth = () => {
    const width = Math.floor(Math.random() * (50 - 15) + 15)
    return width    
}

const randomHeight = () => {
    const height = Math.floor(Math.random() * (50 - 15) + 15)
    return height
}

const randomLeft = () => {
    const left = Math.floor(Math.random() * (50 - 5) + 5)
    return left
}

const randomBottom = () => {
    const bottom = Math.floor(Math.random() * (50 - 5) + 5)
    return bottom
}

const randomSpin = () => {
    const rotate = Math.floor(Math.random() * 360)
    return rotate
}

const start = document.querySelector('#action')
const action = start.addEventListener('click', () => {
    background.classList.remove('background')
    background.style.backgroundImage = randomColor()
for (let i = 0 ; i <= 2000 ; i++) {
    
        triangle.classList.remove('triangle')
        triangle.style.backgroundImage = randomColor()
        triangle.style.height = `${randomHeight()}%`
        triangle.style.width = `${randomWidth()}%`
        triangle.style.left = `${randomLeft()}vw`
        triangle.style.bottom = `${randomBottom()}vh`
        triangle.style.rotate = `${randomSpin()}deg`
    
        circle.classList.remove('circle')
        circle.style.backgroundImage = randomColor()
        circle.style.height = `${randomHeight() * 10}px`
        circle.style.width = circle.style.height
        circle.style.left = `${randomLeft()}vw`
        circle.style.bottom = `${randomBottom()}vh`
    
        square.classList.remove('square')
        square.style.backgroundImage = randomColor()
        square.style.height = `${randomHeight() * 10}px`
        square.style.width = square.style.height
        square.style.left = `${randomLeft()}vw`
        square.style.bottom = `${randomBottom()}vh`
        square.style.rotate = `${randomSpin()}deg`
    
        rectangle.classList.remove('rectangle')
        rectangle.style.backgroundImage = randomColor()
        rectangle.style.height = `${randomHeight()}%`
        rectangle.style.width = `${randomWidth()}%`
        rectangle.style.left = `${randomLeft()}vw`
        rectangle.style.rotate = `${randomSpin()}deg`
    
}

})