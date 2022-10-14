import React, { Component, useEffect, useState } from "react";
import ListaTrabajadoresEnRubro from "../components/ListaTrabajadoresEnRubro";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { BuscarTrabajadores } from "../axios/axiosClient";
import BotonRegistrarseInicio from "../components/BotonRegistrarseInicio";

import { useNavigation } from "@react-navigation/native";

const ListaTrabajadores = ({ navigation, route }) => {
  const { id } = route.params;

  const [trabajador, setTrabajador] = useState([]);
  useEffect(async () => {
 
    const rta = await BuscarTrabajadores(id);
    setTrabajador(rta.data);
    console.log("sdfsfsd", rta.data)
   
  }, []);
 
  return (
    <View> 
       <Text style={styles.titulo}>Trabajadores</Text>
     { (trabajador.length) > 0 ?
  
      <FlatList
        data={trabajador}
        renderItem={({ item }) => (
          <ListaTrabajadoresEnRubro
            text={item.NombreApellido}
            image={item.Foto}
            onPress={() => {
              navigation.navigate("Inicio");
            }}
          />
        )}
        numColumns={1}
        keyExtractor={(item) => item.NombreApellido}
      />
      :
      <>
      <Text style={styles.titulo}>No hay trabajadores disponibles para este rubro</Text>
      <BotonRegistrarseInicio
          text="Volver a rubros"
          onPress={ () =>{
          navigation.navigate('HomeContratador')
        }}
        />
  </>
  }
     
    </View>
  );
};
export default ListaTrabajadores;

const styles = StyleSheet.create({
  titulo: {
    top: '4.5%',
    fontSize: 34,
    left: '35%',
    alignItems: 'center'

},

});
