const express = require('express')
const app = express()
const cors = require('cors') // controle de acesso, localhost consegue enviar requisições pro server
const morgan = require('morgan') // controle de requisições, como se fosse um LOG

// database
require('./database')



app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.listen(3000, () => {
    console.log('Meu servidor está funcionando')
})