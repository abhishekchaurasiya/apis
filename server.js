const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.APP_PORT
const db = process.env.DB_URL;

const router = require("./router/routes")
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', true);
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB is connected!")
    }).catch(error => {
        console.log(error)
    })

app.use("/user", router)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`)
        });
    } catch (error) {
        console.log(error)
    }
};

start()
