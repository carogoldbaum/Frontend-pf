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
    console.log("sdfsdf", informacion4)
    return axiosClient.post('/usuario/DatosPersonales', informacion4 )

}

export const postRestablecer = async (informacion1) => {
    console.log(informacion1)
    return axiosClient.post('/usuario/restablecer', informacion1)
}

export const getMailDiferente = async (informacion5) => {
    console.log("llegooooo")
    return axiosClient.get('/usuario/MailDiferente', informacion5)
}

export const BuscarTrabajadores = async (informacion6) => {
    console.log("InfoTrabajador",informacion6)
    return axiosClient.get(`/postulantesRubros/BuscarTrabajadores/${informacion6}`)
}

export const InsertarPostulanteContratado = async (informacion7) => {
    console.log("fdhgfffffffffffffffffffffffffffff",informacion7)
    return axiosClient.post(`/postulantes/InsertarPostulanteContratado`, informacion7)
}
