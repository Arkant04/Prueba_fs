const fs = require("fs")

const db = "./db/user.json"

function readJSON(db){
    const miObjeto_json =fs.readFileSync(db, "utf-8")
    const miObjeto = JSON.parse(miObjeto_json)
    console.log(miObjeto)
    return miObjeto
}

function resetUsers(){
    const user0 ={
        "username": "admin",
        "password": "1234"
    }

    const user1 ={
        "username": "usuario0",
        "password": "user0123"
    }

    const miObjeto = {
        "users": [user0, user1]
    }
    fs.writeFile(db, JSON.stringify(miObjeto, null, 2), (err) => {
        if(err){
            console.log(err)
            return
        }
        console.log("Archivo creado")
    })
}

function addUsers(){
    const miObjeto = readJSON(db)
    const {users} = miObjeto
    console.log(users)
}

addUsers()
//readJSON(db)
//resetUsers()

module.exports = {
    readJSON,
    db
}