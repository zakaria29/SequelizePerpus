const express = require("express")
const app = express()

// call model for rak
const petugas = require("../models/index").petugas

const md5 = require("md5") // npm install md5

// middleware for allow the request from body
app.use(express.urlencoded({extended:true}))

app.get("/", async(req, res) => {
    petugas.findAll()
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
        nama_petugas: req.body.nama_petugas,
        jabatan_petugas: req.body.jabatan_petugas,
        no_telp_petugas: req.body.no_telp_petugas,
        alamat_petugas: req.body.alamat_petugas,
        username: req.body.username,
        password: md5(req.body.password)
    }

    // execute insert data
    petugas.create(data)
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
        nama_petugas: req.body.nama_petugas,
        jabatan_petugas: req.body.jabatan_petugas,
        no_telp_petugas: req.body.no_telp_petugas,
        alamat_petugas: req.body.alamat_petugas,
        username: req.body.username,
        password: md5(req.body.password)
    }

    // key yg menunjukkan data yg akan diubah
    let parameter = {
        id_petugas: req.body.id_petugas
    }


    // execute update data
    petugas.update(data,{where : parameter})
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

app.delete("/:id_petugas", async(req, res) => {
      let id_petugas = req.params.id_petugas // variable

      // object
      let parameter = {
          id_petugas: id_petugas
      }

      // execute delete data
    petugas.destroy({where : parameter})
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