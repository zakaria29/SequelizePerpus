const express = require("express")
const app = express()

// call router
let rak = require("./router/rak")
let buku = require("./router/buku")

app.use("/rak", rak)
app.use("/buku", buku)
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})