const express = require("express")
const app = express()

// call model for rak
const rak = require("../models/index").rak

// middleware for allow the request from body
app.use(express.urlencoded({extended:true}))

app.get("/", async(req, res) => {
    rak.findAll()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.post("/", async(req, res) => {
    // tampung data request yang akan di masukkan
    let data = {
        nama_rak: req.body.nama_rak,
        lokasi_rak: req.body.lokasi_rak
    }

    // execute insert data
    rak.create(data)
    .then(result => {
        res.json({
            message: "Data has been inserted",
            data: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.put("/", async(req, res) => {
    // tampung data request yang akan di ubah
    let data = {
        nama_rak: req.body.nama_rak,
        lokasi_rak: req.body.lokasi_rak
    }

    // key yg menunjukkan data yg akan diubah
    let parameter = {
        id_rak: req.body.id_rak
    }


    // execute update data
    rak.update(data,{where : parameter})
    .then(result => {
        res.json({
            message: "Data has been updated",
            data: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.delete("/:id_rak", async(req, res) => {
      let id_rak = req.params.id_rak // variable

      // object
      let parameter = {
          id_rak: id_rak
      }

      // execute delete data
    rak.destroy({where : parameter})
    .then(result => {
        res.json({
            message: "Data has been destroyed",
            data: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

module.exports = app