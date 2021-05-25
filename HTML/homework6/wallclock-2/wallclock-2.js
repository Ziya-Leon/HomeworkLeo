setInterval(clockwall, 1000)

const hourid = document.querySelector('[data-hour-id]')
const minuteid = document.querySelector('[data-minute-id]')
const secondid = document.querySelector('[data-second-id]')

function clockwall() {
   const truenowdate = new Date()
   const secondnow = truenowdate.getSeconds() /60
   const minutenow = (secondnow + truenowdate.getMinutes()) / 60
   const hournow = (minutenow + truenowdate.getHours()) /12
   clockrotation(secondid,secondnow)
   clockrotation(minuteid,minutenow)
   clockrotation(hourid,hournow)
}

function clockrotation(element,rotationClock) {
    element.style.setProperty('--rotation', rotationClock * 360)
}

clockwall ()

