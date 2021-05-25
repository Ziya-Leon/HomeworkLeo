setInterval(setClock, 1000)

const hourScorpion = document.querySelector('[data-hour-scorpion]')
const minuteScorpion = document.querySelector('[data-minute-scorpion]')
const secondScorpion = document.querySelector('[data-second-scorpion]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondScorpion, secondRatio)
    setRotation(minuteScorpion, minuteRatio)
    setRotation(hourScorpion, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()