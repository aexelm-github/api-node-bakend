
const GET_PERFILES = () => {
    const rows = [
        {
            PER_ID: "lasjoej93-01",
            PER_NAME:"Administrador",
            PER_DESCRIPCION:"Perfil para uso exclusivo de los administradores"
        },
        {
            PER_ID: "lasjoej93-02",
            PER_NAME:"Consulta",
            PER_DESCRIPCION:"Perfil para uso exclusivo de consulta"
        },
        {
            PER_ID: "lasjoej93-03",
            PER_NAME:"Operativo",
            PER_DESCRIPCION:"Perfil para uso exclusivo de los operativos"
        },
    ]

    const json = {
        result:"success",
        message:"Datos recuperados exitosamente!",
        rows
    }
    
    return json
}

module.exports = {  
    GET_PERFILES
}