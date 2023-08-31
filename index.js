import express from 'express'
import { pool } from './_sql.js'
import cors from 'cors'
import multer from 'multer'


const app = express()
app.use(express.json())
app.use(cors())


// get images
app.use(express.static("uploads"))


app.get("/data", (req, res) => {
    try {
        pool.query("select * from hotels.hotel", (err, data) => {
            res.send(data)
        })
    }
    catch (err) {
        throw err;
    }
})

app.get("/data/:id", (req, res) => {
    try {

        pool.query(`SELECT * FROM hotels.hotel WHERE hotel_id = ${req.params.id}`, (err, data) => {
            res.send(data)
        })
    }
    catch (err) {
        throw err
    }
})

app.post("/book/:id", (req, res) => {
    try {
        pool.query(`UPDATE hotels.hotel SET status_ = true WHERE hotel_id = ${req.params.id}`, (err, data) => {
            console.log(data)
            res.status(200)
        })
    }
    catch (err) {
        throw err
    }
})

// upload images
// configure storage
var randomINT = Math.floor(Math.random() * 100000);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images')
    },
    filename: (req, file, cb) => {
        cb(null, randomINT.toString() + file.originalname);
    }
})
const upload = multer({ storage: storage })

// image post route
app.post("/upload", upload.single("image"), (req, res) => {
    try {
        const sql = 'INSERT INTO hotels.hotel (title,price,image,shortDescription,longDescription,rooms,bathroom,tv,badroom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        pool.query(
            sql,
            [
                req.body.title,
                Number(req.body.price),
                randomINT.toString() + req.file.originalname,
                req.body.desc_short,
                req.body.desc_long,
                Number(req.body.rooms),
                req.body.bedrooms,
                Boolean(req.body.bathroom),
                Boolean(req.body.tv),
            ],
            (err, response_) => {
                if (err) {
                    throw err
                }
                console.log(response_)
            }
        )
        res.send("success")
    }
    catch (err) {
        throw err
    }
    // res.send("hello world")
})


app.listen(8080, () => {
    console.log("server is listening")
})