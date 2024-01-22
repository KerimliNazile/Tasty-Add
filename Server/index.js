import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'

dotenv.config()
app.use(cors())
app.use(express.json())


const depSchema = new Schema({
    image: { type: String, required: true },
    text: { type: String, required: true },
    info: { type: String, required: true },
    price: { type: Number, required: true }
})
const Deps = mongoose.model("Deps", depSchema)


app.get('/deps', async (req, res) => {
    try {
        const deps = await Deps.find({})
        res.send(deps)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
app.get('/deps/:id', async (req, res) => {
    try {
        const deps = await Deps.findById(req.params.id)
        res.send(deps)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/deps', async (req, res) => {
    try {
        const dep = new Deps({
            image: req.body.image,
            text: req.body.text,
            info: req.body.info,
            price: req.body.price
        })
        await dep.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.delete('/deps/:id', async (req, res) => {

    try {
        const deps = await Deps.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})