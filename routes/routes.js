const express = require('express')
const router = express.Router()
const session = require("../controllers/sessionController")
const data = require("../controllers/dataController")
const jwtoken = require("../libraries/jwtoken")

/* Función para validar el TOKEN */
const verifyToken = async (req,res,next) =>  {
    const bearerHeader = req.headers["authorization"]
    if (typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1]
        await jwtoken.jwtVerify(bearerToken)
        .then( r => {
            console.log(r)
            req.token = bearerToken
            next()
        })
        .catch( e => {
            console.log(e)
            res.json({
                result: "error",
                message : "Error: JWToken Inválido on sin token",
                status: 403
            })
        })
    }else{
        res.json({
            result: "error",
            message : "Error: JWToken Inválido on sin token",
            status: 403
        })
    }   
}

const infoServer = (req,res) => {
    console.log("aexelm@api-server")
    res.json({
        result: "success",
        message: "El servidor se encuentra activo"
    })
}

/* Routes para el navegador */
router.post("/info-server", infoServer )
router.post("/session/:route", session.controller )
router.post("/data/:route", verifyToken, data.controller )

module.exports = router;