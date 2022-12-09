const jwt = require('jsonwebtoken')

/* función para validar el TOKEN JWT */
const jwtVerify = (token) => new Promise((resolve, reject) => {
    let response = {}
    jwt.verify(token, 'aexelm-key-ytjsuwrpodm-r09j', (error, authData) => {
        if (error) {
            console.log(error)
            response = {
                result: "error",
                message: "Error. Token Inválido. Inicie sessión nuevamente!!!",
                //authData 
            }
            reject(response)
        } else {
            response = {
                result: "success",
                message: "Token Valido en Post",
                //authData 
            }
            resolve(response)
        }
    })
})

const jwtSign = (email, password) => new Promise((resolve,reject) => {
    jwt.sign({ email, password },'aexelm-key-ytjsuwrpodm-r09j', {expiresIn : '3600s'}, async (err, token) => {
        if (!err){
            json = {
                result : 'success',
                message : 'Token Generado Exitosamente',
                token, 
                err
            };
            resolve(json)
        }else{
            json = {
                result : 'error',
                message : 'Error al Generar el Token',
                token, 
                err
            };
            reject(json)
        }
    });  
})

module.exports = {
    jwtVerify,
    jwtSign
}