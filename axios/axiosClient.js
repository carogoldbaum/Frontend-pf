import axios from "axios";

const axiosClient = axios.create ({
    baseURL:"http://localhost:3000",

})

export const getRubro = async () => {
    console.log("llegooooo")
    return axiosClient.get('/rubro/rubro')
    
}

export const postRegistrarse = async (informacion3) => {

    return axiosClient.post('/usuario/registrarse', informacion3)
}

export const postIniciarSesion = async (informacion2) => {
    console.log(informacion2)
    return axiosClient.post('/usuario/IniciarSesion', informacion2)
}

export const postDatosPersonales = async (informacion4) => {
    return axiosClient.post('/usuario/DatosPersonales',informacion2 )

}

export const postRestablecer = async (informacion1) => {
    console.log(informacion1)
    return axiosClient.post('/usuario/restablecer', informacion1)
}

export const getMailDiferente = async () => {
    return axiosClient.get('/usuario/MailDiferente')
}