import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity } from 'react-native';
import BotonContratarTrabajadores from "../components/BotonContratarTrabajadores";
import {InsertarPostulanteContratado} from "../axios/axiosClient"
import { useNavigation } from '@react-navigation/native';

const Inicio = ({ navigation, route}) => {
    const { ida } = route.params;

    const [userState, setUserState] = useState({
        time:  '' ,
        date:  '',
       idUsuario: ida,
      });

    useEffect(() => {
        let tiempo = getCurrentTime();

        let fecha = getCurrentDate();
 
        setUserState({...userState, date:fecha, time:tiempo});
    
    }, []);

    const getCurrentDate=()=>{
        let todayDate = new Date();
        var date = todayDate.getDate();
        var month = todayDate.getMonth() + 1;
        var year = todayDate.getFullYear();

        return year + '-' + month + '-' + date;
  }

    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        
        console.log("getCurrentTime", hours, minutes, seconds)

        return hours + ':' + minutes + ':' + seconds;
    }

    return (

        <View>
            
            <Text style={styles.paragraph}>{'Fecha actual'} : {userState.date}</Text>
            <Text style={styles.paragraph}>{'Hora actual'} : {userState.time}</Text>

            <BotonContratarTrabajadores style={{ fontSize: 48 }}
                text="CONTRATAR"
                onPress={async() => {
                    setUserState({...userState, time: getCurrentTime()});
                    setUserState({...userState, date: getCurrentDate()});
                
                        try {
                          console.log("lo que mando", userState)
                          
                          await InsertarPostulanteContratado(userState)
                         
                            console.log('se mando bien por qué no se fue al catch con un error');
                            navigation.navigate('Inicio')
          
                        } catch (err) {    
                          console.error("todo mal", err)
                        };
          
                      } 
                    
                    //navigation.navigate('Inicio')
                }  
            />

        </View>

    );
}

export default Inicio

const styles = StyleSheet.create({

});

