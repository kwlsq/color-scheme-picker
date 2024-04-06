const schemeModes = [
    "monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"
]

const baseURL = "https://www.thecolorapi.com"
const form = document.getElementById("form")

// Render Schemes selection
const renderSchemeSelection = () => {
    let options = ''
    schemeModes.forEach((mode) => {
        options += `
            <option value="${mode}">${mode}</option>
        `
    })
    document.getElementById('scheme-mode').innerHTML = options
}

renderSchemeSelection()

// Submit Event Listener
document.addEventListener("submit", (e) => {
    e.preventDefault()
    const seedColorData = new FormData(form)
    const seedColor = seedColorData.get('seed-color')
    const schemeMode = seedColorData.get('scheme-mode')
})

// Fetch
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
