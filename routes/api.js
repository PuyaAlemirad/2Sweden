require("dotenv").config()
const express = require('express')
const router = express.Router()
const axios = require("axios")

// router.get("/", (req, res) => {
//     res.json({"message": "Hello World!"})
// })

router.get("/r2r/:from/:to", (req, res) => {
    console.log("Client request params:",req.params)

    const key = process.env.ROME_2_RIO_KEY
    const origin = req.params.from
    const destination = req.params.to

    const url = `http://free.rome2rio.com/api/1.4/json/Search?key=${key}&oName=${origin}&dName=${destination}`

    axios.get(url)
        .then(response => {
            console.log("Axios response data:", response.data)
            res.json(response.data)
        })
        .catch(err => {
            console.error(err)
            res.status(500).send("Error from external API")
        })

})

module.exports = router