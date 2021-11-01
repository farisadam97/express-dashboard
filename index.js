require("dotenv").config()

const express = require("express");
const path = require('path');
const routers = require("./routes/route");
const sequilize = require("./models/sequilize")


const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(routers)

sequilize.authenticate().then(() => {
        console.log("connect");
    })
    .catch((error) => {
        console.log("error");
    });

app.listen(PORT, () => {
    console.log(`Server load with port : ${PORT}`)
})