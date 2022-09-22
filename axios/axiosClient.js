import axios from "axios";

const axiosClient = axios.create ({
    baseURL:"https://enigmatic-harbor-06234.herokuapp.com",

})

export const getRubro = async () => {
    return axiosClient.get('/rubros/rubro', {
    
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
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