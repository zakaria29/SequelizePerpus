const express = require("express")
const app = express()

// library untuk upload file
// ---------------------------------
const multer = require("multer")
// multer digunakan untuk membaca data request dari form-data
const path = require("path")
// path untuk manage alamat direktori file
const fs = require("fs")
// fs untuk manage file

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./cover")
    },
    filename: (req, file, cb) => {
        cb(null, "cover-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})
// ---------------------------------

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

app.post("/", upload.single("cover") ,async(req, res) => {
    // tampung data request yang akan di masukkan
    let data = {
        id_rak: req.body.id_rak,
        judul_buku: req.body.judul_buku,
        stok: req.body.stok,
        penulis_buku: req.body.penulis_buku,
        penerbit_buku: req.body.penerbit_buku,
        tahun_penerbit: req.body.tahun_penerbit,
        cover: req.file.filename
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

app.put("/", upload.single("cover"), async(req, res) => {
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

    if (req.file) {
        let oldBuku = await buku.findOne({where: parameter})
        let oldCover = oldBuku.cover

        // delete old file
        let pathFile = path.join(__dirname,"../cover",oldCover)
        // __dirname = path direktori pada file saat ini
        fs.unlink(pathFile, error => console.log(error))
        // unlink = hapus file

        data.cover = req.file.filename
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

      // ambil data yg akan dihapus
      let oldBuku = await buku.findOne({where: parameter})
      let oldCover = oldBuku.cover

      let pathFile = path.join(__dirname, "../cover",oldCover)
      fs.unlink(pathFile, err => console.log(err))

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