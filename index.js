const baseURL = "https://www.thecolorapi.com"

const getColors = () => {
    fetch(`${baseURL}/id?hex=0047AB`)
        .then(response=>response.json())
        .then(data=>console.log(data))
}

const getSchemes = () => {
    fetch(`${baseURL}/scheme?hex=0047AB&mode=analogic`)
        .then(response=>response.json())
        .then(data=>console.log(data))
}
