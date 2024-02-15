const fs = require("fs")

const mi_coche_json =fs.readFileSync("./coche.json", "utf-8")
const mi_coche = JSON.parse(mi_coche_json)
mi_coche.reudas = 10

console.log(mi_coche)

fs.writeFileSync("./coche.json", JSON.stringify(mi_coche, null, 2))
//fs.appendFileSync("./coche.json", JSON.stringify(mi_coche, null, 2), "utf-8") //esto añade el objeto en otra linea, sirve para seuir añadiendo secuencialmente

