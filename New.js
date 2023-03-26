document.body.style.display = "flex"
document.body.style.flexDirection = "column"

const colors = ["DarkOrchid", "DarkViolet", "Navy", "DarkOrchid", "MediumBlue", "DarkOrchid"]
const darkColors = ["black", "silver", "Cyan", "lime", "black", "gold", "magenta", "lime", "whiteSmoke", "purple", "pink", "black", "black", "red", "Yellow", "black", "black", "black", "black", "black", "black", "LightSkyBlue", "black", "silver", "black", "black", "black", "black", "black", "black", "LightCyan", "MediumSpringGreen", "blue", "Lavender"]
const borderSize = ["10px", "30px", "50px", "50px"];

for (let i = 3; i < document.body.childNodes.length - 2; i += 2) {
    document.body.childNodes[i].style.display = "flex"
    document.body.childNodes[i].style.flexDirection = "column"
    document.body.childNodes[i].style.justifyContent = "space-evenly"
    document.body.childNodes[i].style.width = "100%"
    document.body.childNodes[i].style.height = "160px"
    document.body.childNodes[i].style.background = "black"
    setInterval(() => document.body.childNodes[i].style.background = colors[Math.floor(Math.random() * colors.length)], 1000)

    for (let j = 1; j < document.body.childNodes[i].childNodes.length; j += 2) {
        document.body.childNodes[i].childNodes[j].style.display = "flex"
        document.body.childNodes[i].childNodes[j].style.justifyContent = "space-around"
        document.body.childNodes[i].childNodes[j].style.alignItems = "center"
        document.body.childNodes[i].childNodes[j].style.flexDirection = "row"
        document.body.childNodes[i].childNodes[j].style.height = "45px"
        document.body.childNodes[i].childNodes[j].style.background = "black"
        for (let k = 1; k < document.body.childNodes[i].childNodes[j].childNodes.length; k += 2) {
            document.body.childNodes[i].childNodes[j].childNodes[k].style.width = "30px"
            document.body.childNodes[i].childNodes[j].childNodes[k].style.height = "30px"
            document.body.childNodes[i].childNodes[j].childNodes[k].style.borderStyle = "solid"
            setInterval(() => {
                document.body.childNodes[i].childNodes[j].childNodes[k].style.background = darkColors[Math.floor(Math.random() * darkColors.length)],
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.borderRadius = Math.floor(Math.random() * borderSize.length)
                document.body.childNodes[i].childNodes[j].childNodes[k].style.width = "30px",
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.height = Math.floor(Math.random() * borderSize.length)
            }, 1000)
            setInterval(() => {
                document.body.childNodes[i].childNodes[j].childNodes[k].style.background = darkColors[Math.floor(Math.random() * darkColors.length)],
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.borderRadius = Math.floor(Math.random() * borderSize.length),
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.width = "30px",
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.height = "30px"
            }, 1200)
            setInterval(() => {
                document.body.childNodes[i].childNodes[j].childNodes[k].style.background = darkColors[Math.floor(Math.random() * darkColors.length)],
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.width = "15px",
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.height = "15px",
                    document.body.childNodes[i].childNodes[j].childNodes[k].style.borderRadius = "50px"
            }, 1400)

        }
    }
};



