const fs = require("fs")

//fs.writeFileSync("./test.text", "hola mundo")

const coche = {
    "reudas": 4,
    "puertas": 5,
    "tipo_motor": "electrico",
    "marca": "opel",
    "modelo": "corsa",

}

const coche_json = JSON.stringify(coche, null, 2)

fs.writeFile("./coche.json", coche_json, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Archivo creado")
})