import axios from "axios";

const axiosClient = axios.create ({
    baseURL:"http://localhost:5000",

})

export const getRubro = async () => {
    return axiosClient.get('/rubro', {
    
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const postRegistrarse = async () => {
    return axiosClient.post('/registrarse', {
  
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const postDatosPersonales = async () => {
    return axiosClient.post('/DatosPersonales', {
      
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const getIniciarSesion = async (informacion) => {
    console.log(informacion)
    return axiosClient.post('/usuario/IniciarSesion', {data:informacion} 
   
    ).then(function(res){
        
        return res.data
    })
    .catch(function(){
        throw e
    })
}

export const postRestablecer = async () => {
    return axiosClient.post('/restablecer', {
      
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const getMailDiferente = async () => {
    return axiosClient.get('/MailDiferente', {
       
    }).then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}