const model_perfiles = require("../models/model_perfiles")

const controller = (req, res) => {
    const { route } = req.params
    switch(route) {
        case "GET_PERFILES":
            getPerfiles(req,res)
        break;
        default:
            res.json({
                result:"error",
                message:`La ruta [${route}] especificada no existe!`,
                code: 404
            })
    }
}

const getPerfiles = (req,res) => {
    console.log(req.body)
    const result = model_perfiles.GET_PERFILES()
    res.json(result)
}

module.exports = {
    controller
}