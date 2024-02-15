const express = require(`express`) 

const app = express(); 

app.get("/hola", (req, res) =>{
    res.send("hola mundo")
})

app.listen(3000, () => {
    console.log(`sa inicio`)
  });