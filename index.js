const schemeModes = [
    "Monochrome", "Monochrome-dark", "Monochrome-light", "Analogic", "Complement", "Analogic-complement", "Triad", "Quad"
]

const baseURL = "https://www.thecolorapi.com"
const form = document.getElementById("form")
let colorConfig = {
    seedColor: '00000',
    schemeMode: 'monochrome'
}

// Render Schemes selection
const renderSchemeSelection = () => {
    let options = ''
    schemeModes.forEach((mode) => {
        options += `
            <option value="${mode.toLowerCase()}">${mode}</option>
        `
    })
    document.getElementById('scheme-mode').innerHTML = options
}

renderSchemeSelection()

// Render Color Schemes
const renderColorSchemes = (colors) => {
    let schemes = ''
    console.log(colors)
    colors.forEach((color) => {
        schemes += `
            <div>${color.hex.value}</div>
        `
    })
    document.getElementById('color-scheme').innerHTML = schemes
}

// Submit Event Listener
document.addEventListener("submit", (e) => {
    e.preventDefault()
    const seedColorData = new FormData(form)
    colorConfig = {
        seedColor: seedColorData.get('seed-color').slice(1),
        schemeMode: seedColorData.get('scheme-mode')
    }
    console.log(colorConfig)
    getSchemes()
})

// Fetch
const getSchemes = () => {
    fetch(`${baseURL}/scheme?hex=${colorConfig.seedColor}&mode=${colorConfig.schemeMode}`)
        .then(response => response.json())
        .then(data => renderColorSchemes(data.colors))
}

getSchemes()
