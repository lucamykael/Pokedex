const axios = require('axios');
const express = require('express');

const router = express.Router();

const url = 'https://pokeapi.co/api/v2/pokemon/';

router.get('/', async (req, res) => {
    try {
        const { data } = await axios(url, {
            params: {
                offset: 0,
                limit: 2000
            }
        })
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;