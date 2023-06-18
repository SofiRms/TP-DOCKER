const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config();

const PORT = process.env.PORT 
const app = express()


//para comprobar nms
console.log(process.env.DB_HOST)


app.use(cors())
app.use(morgan('combined'))

app.use(express.json())

app.use(require('./src/routes/routes.js'))

app.listen(PORT, () => 
    console.log(`listen on port ${PORT}`
))

