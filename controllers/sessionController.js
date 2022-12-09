const jwtoken = require("../libraries/jwtoken")

const controller = (req,res) => {
    const { route } = req.params
    switch(route) {
        case "LOGIN":
            LOGIN(req,res)
        break;
        default:
            res.json({
                result:"error",
                message:`La ruta [${route}] especificada no existe!`,
                code: 404
            })
    }
}

const LOGIN = async (req, res) => {
    console.log(req.body)
    const { user, password } = req.body
    await jwtoken.jwtSign(user, password)
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
}

module.exports = {
    controller,
}