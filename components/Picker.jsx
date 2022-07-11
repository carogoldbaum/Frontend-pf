import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Picker = () =>{
    const [rubro, setRubros] = useState([]);
    let ghostList;
    
    console.log("obtener elementos")
    useEffect(() => {
        axios.get(`http://localhost:5000/rubro`)
        .then(function (response) {
            console.log("Se han traido los datos")
            ghostList=(response.data)
        })
        .catch(function (error) {
            console.log("No se han traido los datos :( ")
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(ghostList)
            setRubros(ghostList);
        })
    }, []);
    console.log("a")
    return(
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={rubro.map(
                (i) =>{
                    return(
                        {
                            label:i.Nombre,
                            value:i.Nombre
                        }
                    )
                }

            )}
        />
    )
}

export default Picker
    