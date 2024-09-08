submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultcont.innerHTML = `<img width="123" src="img/email.svg" alt="">`
    let key = "ema_live_k6nCybwJ1JutVbgKtW7KYdqwAhDoFTxot4SOV7cM"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}:${result[key]}</div>`
        }
    }
    console.log(str)
    resultcont.innerHTML = str
})