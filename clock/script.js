function c() {
    const today = new Date()
    const hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()

console.log(hour + ":" + minute + ":" + second )

let a = document.getElementById("clock")
a.innerHTML =  `<span>${hour}:${minute}:${second}</span>`

}
setInterval(c,1000)
