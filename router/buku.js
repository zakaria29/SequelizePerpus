const express = require("express")
const app = express()

// call model for buku
const buku = require("../models/index").buku

// middleware for allow the request from body
app.use(express.urlencoded({extended:true}))

app.get("/", async(req, res) => {
    buku.findAll({
        include: ["rak"]
    })
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
        id_rak: req.body.id_rak,
        judul_buku: req.body.judul_buku,
        stok: req.body.stok,
        penulis_buku: req.body.penulis_buku,
        penerbit_buku: req.body.penerbit_buku,
        tahun_penerbit: req.body.tahun_penerbit,
    }

    // execute insert data
    buku.create(data)
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
        id_rak: req.body.id_rak,
        judul_buku: req.body.judul_buku,
        stok: req.body.stok,
        penulis_buku: req.body.penulis_buku,
        penerbit_buku: req.body.penerbit_buku,
        tahun_penerbit: req.body.tahun_penerbit,
    }
    // key yg menunjukkan data yg akan diubah
    let parameter = {
        id_buku: req.body.id_buku
    }


    // execute update data
    buku.update(data,{where : parameter})
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

app.delete("/:id_buku", async(req, res) => {
      let id_buku = req.params.id_buku // variable

      // object
      let parameter = {
          id_buku: id_buku
      }

      // execute delete data
    buku.destroy({where : parameter})
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