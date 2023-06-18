const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const PORT =3000
const app = express()

require('dotenv').config();

//para comprobar nms
console.log(process.env.DB_HOST)


app.use(cors())
app.use(morgan('combined'))

app.use(express.json())

app.use(require('./src/routes/routes.js'))

app.listen(PORT, () => 
    console.log(`listen on port ${PORT}`
))

