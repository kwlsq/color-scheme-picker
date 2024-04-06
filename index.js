const baseURL = "https://www.thecolorapi.com"

const form = document.getElementById("form")

document.addEventListener("submit", (e) => {
    e.preventDefault()
    const seedColorData = new FormData(form)
    const seedColor = seedColorData.get('seed-color')
    const schemeMode = seedColorData.get('scheme-mode')
    console.log(seedColor)
    console.log(schemeMode)
})
const getColors = () => {
    fetch(`${baseURL}/id?hex=0047AB`)
        .then(response => response.json())
        .then(data => console.log(data))
}

const getSchemes = () => {
    fetch(`${baseURL}/scheme?hex=0047AB&mode=analogic`)
        .then(response => response.json())
        .then(data => console.log(data))
}
