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
    console.log(informacion3)
    return axiosClient.post('/usuario/registrarse', {data:informacion3}  
  
    ).then(function(res){
        return data
    })
    .catch(function(){
        throw e
    })
}

export const postIniciarSesion = async (informacion2) => {
    console.log(informacion2)
  
    return axiosClient.post('/usuario/IniciarSesion', {informacion2}  
    
    ).then(function(res){
        console.log("todo bien axios 1")
        return res.data
    })
    .catch(function(){
        throw "Error"
    })
}

export const postDatosPersonales = async () => {
    return axiosClient.post('/usuario/DatosPersonales', {
      
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const postRestablecer = async (informacion1) => {
    console.log(informacion1)
    return axiosClient.post('/usuario/restablecer', {informacion1} 
      
    ).then(function(res){
        console.log("todo bien axios 1")
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const getMailDiferente = async () => {
    return axiosClient.get('/usuario/MailDiferente', {
       
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}