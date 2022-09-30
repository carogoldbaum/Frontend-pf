import axios from "axios";

const axiosClient = axios.create ({
    baseURL:"localhost:3000",

})

export const getRubro = async () => {
    return axiosClient.get('/rubros/rubro')
    
}

export const postRegistrarse = async (informacion3) => {

    return axiosClient.post('/usuario/registrarse', informacion3)
}

export const postIniciarSesion = async (informacion2) => {
    console.log(informacion2)
    return axiosClient.post('/usuario/IniciarSesion', informacion2)
}

export const postDatosPersonales = async () => {
    return axiosClient.post('/usuario/DatosPersonales')

}

export const postRestablecer = async (informacion1) => {
    console.log(informacion1)
    return axiosClient.post('/usuario/restablecer', informacion1)
}

export const getMailDiferente = async () => {
    return axiosClient.get('/usuario/MailDiferente')
}