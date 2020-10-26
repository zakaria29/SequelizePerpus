const express = require("express")
const app = express()

// call router
let rak = require("./router/rak")
let buku = require("./router/buku")
let petugas = require("./router/petugas")
let auth = require("./router/auth")

app.use("/rak", rak)
app.use("/buku", buku)
app.use("/petugas", petugas)
app.use("/auth", auth)

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})