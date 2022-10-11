import React, { Component, useEffect, useState } from 'react';
import BotonTrabajadorXRubro from "../components/BotonTrabajadorXRubro"
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {BuscarTrabajadores} from "../axios/axiosClient"

import { useNavigation } from '@react-navigation/native';

const ListaTrabajadores =({navigation, props })=>{

  const { Id } = props.params

  const [trabajador, setTrabajador] = useState([]);
 useEffect(async () => {
 console.log("xcvgfjklgnxfdklghkdjfbhfdjk", Id)
   const rta = await BuscarTrabajadores(Id);
   setTrabajador(rta.data);
    console.log("obtengo los trabajadores", rta.data)
  }, [])

  return (

    <View>
           <Text style={styles.titulo}>Rubros</Text>
            <View style={{ borderBottomColor: 'black', borderWidth: 0.7, width: '100%', marginBottom: '10%', marginTop: '-10%'}}></View>
           
            <FlatList
            
                data={trabajador}
                renderItem={({ item }) => <BotonTrabajadorXRubro text={item.NombreApellido} image={item.Foto}  onPress={() => {
                    navigation.navigate('Inicio')
                }} />}
                numColumns={1}
                keyExtractor={item => item.IdUsuario}
            />

    </View>

  );
}
export default ListaTrabajadores

const styles = StyleSheet.create({
  titulo: {
    top: '4.5%',
    fontSize: 34,
    left: '35%',
    alignItems: 'center'

},
});
