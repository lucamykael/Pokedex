const cors = require('cors')
const express = require('express')

const allPokemon = require('./routes/allPokemon')

const app = express()

app.use(cors())

app.use('/', allPokemon)

app.listen('3000', () => {
    console.log('Server started.')
})